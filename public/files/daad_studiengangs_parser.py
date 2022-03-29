import sys
import json
import pprint # Wird nur zum debuggen gebraucht
from requests_html import HTMLSession

# =======================================================================================

# Installation:

# 1. Python installieren MIT Pfad Variable
# 2. In CMD: 
# ohne ' eintippen -> 'pip install requests_html'
#
# 3. Diese .py Datei mit zB. Idle öffnen (Editor der mit Python kommt) und ausführen
# 4. Resultat ist eine .json Datei die weiter verarbeitet werden kann 

# =======================================================================================
# User settings
# =============

TIMEOUT = 5
PAGE_RANGE = range( 0 , 1 ) # von(nicht ink),bis(ink) eg. 3,6 -> Seiten 4,5,6 / Wird von LOAD_ALL = True überschrieben
LOAD_ALL = True 
SEARCH_LINKS = False # Links neu finden, bei false wird von der Datei courseList.txt geladen

# ============= Einstellungen beim Laden der Details

START_INDEX_COURSES = 0 # Fängt bei diesem Index an Studiengänge zu laden // Oder auch: START INDEX INKLUSIVE
MAX_COURSES = 22000 # Anzahl der Studiengänge deren Details geladen werden sollen // Oder auch: ZIEL INDEX EXKLUSIVE

# Timeout Handling: 

# Option 1 (empfohlen auch wenn option 2 komfortabler ist)
# 1. Die courseList.json in einem Unterordner abspeichern damit sie nicht überschrieben wird zusammen mit der courseList.txt
# 2. Dann die courseListErrors.txt in courseList.txt umbenennen (damit diese als neue Linkliste genommen wird) und erneut starten
# 3. Wenn wieder Timeouts vorkommen wieder zu 1. - Diesen Prozess wiederholen bis keine Fehler vorkommen (etwa 3-4 mal)
# 4. Die resultierenden 3-4 .json Dateien mit den Daten in eine kombinieren, dafür gibt es Tools im Internet (Google: combine json files online)

# Option 2 (fehleranfälliger)
USE_ERROR_FILE = False # False: Normales laden der Studiengänge, True: Lädt die Studiengänge die letztes mal nicht funktioniert haben 
                       # ACHTUNG: COURSE_FILE_NAME muss vorher geändert werden da die vorherigen Daten sonst überschrieben werden
                       # Das Ergebnis sind 2 .json Dateien deren Inhalt man einfach mit einem Texteditor in eine einzelne kopieren kann

# =============
COURSE_LIST_FILE_NAME = "courseList.txt" # Hat Links zu allen Studiengängen

COURSE_FILE_NAME = "courseData.json" # Hat die Daten der Studiengänge
ERROR_COURSE_FILE_NAME = "courseListErrors.txt" # Hat Links zu Studiengängen bei deren Ladevorgang ein Fehler passiert ist
# =======================================================================================

# ============================= Funktionen - Studiengang Links =============================

# Findet die maximale Seitenzahl heraus
def getPageCount(session):
    r = session.get("https://www2.daad.de/deutschland/studienangebote/studiengang/de/");
    r.html.render(timeout=TIMEOUT, sleep=TIMEOUT)
    sel = '#course-list > ul.pagination > li:not([class])'
    pageCountElement = r.html.find(sel)[6] # In der Seitenzahl-Navigation, die letzte Seite ist das 7te li Element (id=6)
    return int(pageCountElement.text)

# Liste der jeweiligen Studiengänge auf Seite 'page' als Liste zurückgeben
def getCourseLinks(session,page,pageCount):
    print('Verarbeit: '+str(page)+'/'+str(pageCount)) 
    r = session.get("https://www2.daad.de/deutschland/studienangebote/studiengang/de/?a=result&q=&degree=&courselanguage=&locations=&admissionsemester=&sort=name&page="+str(page))
    r.html.render(timeout=TIMEOUT, sleep=TIMEOUT)
    sel = '#course-list > ul'
    courseItems = r.html.find(sel, first=True)
    return list(courseItems.links)

# Liste zu String in jeweils neuer Zeile
def listToStr(elements):
    _content = ""
    for item in elements:
        _content = _content + str(item) + "\n"
    return _content

# ============================= Main - Studiengang Links =============================

session = HTMLSession()
courseList = []

if( SEARCH_LINKS ):
    print("Ermittle Anzahl der Seiten...")
    pageCount = getPageCount(session)
    print("Anzahl Seiten: " + str(pageCount))
    # Check wie viele Seiten geladen werden müssen, wie lange
    if( LOAD_ALL ):
        PAGE_RANGE = range( 0 , pageCount )
        estimatedTime = ( pageCount * (TIMEOUT*2) ) / 60
        print("Alle Seiten werden geladen. Geschätze Dauer: ~"+str(estimatedTime)+" Minuten")
    else:
        print("Folgende Seiten werden geladen "+ str(PAGE_RANGE))
    # file for course links
    f = open(COURSE_LIST_FILE_NAME, "w")
        
    
    # Seiten durchlaufen
    for currentPage in PAGE_RANGE:
        currentPage = currentPage + 1
        
        addedCourseLinks = getCourseLinks(session,currentPage,pageCount)
        formatted = listToStr(addedCourseLinks)
        f.write( formatted )
        courseList = courseList + addedCourseLinks
        
    f.close()
    print("Parsen beendet. Ergebnisse in courseList.txt verfügbar.")

# Links kommen aus der Datei    
else:
    print("Links werden von der Datei geladen.")

    # Entweder wird aus der Standard Liste geladen oder aus der Error Liste
    if USE_ERROR_FILE:
        linkFile = open(ERROR_COURSE_FILE_NAME, "r")
    else:
        linkFile = open(COURSE_LIST_FILE_NAME, "r")
    
    for line in linkFile:
        courseList.append( line )
    linkFile.close()
    print(str(len(courseList))+" Links geladen.")

# ============================= Funktionen - Studiengang Content =============================

# Gibt true zurück wenn der String als int gecasted werden kann
def is_number(string):
    try:
        int(string)
        return True
    except ValueError:
        return False

# Tauscht die \n newLine Elemente mit der HTML Version aus (WP ignoriert \n)
def addNewLineTags(string):
    return string.replace("\n","<br/>")

# Entfernt Umlaute von einem String und gibt ihn klingeschrieben zurück
def removeUmlautsLower(string):
    return string.lower().replace("ä","ae").replace("ü","ue").replace("ö","oe").replace("ß","ss")

# Verarbeitet den Header der Studiengangseite auf daad.de
def processTitleString(string):
    text = string.replace("(", "")
    text = text.replace(")", "")
    return [x.strip() for x in text.split('•')]

# Verpacke den Link zur Website in einen HTML <a> Tag
def linkToHtmlLink(linkString):
    return ''.join(['<a href="',str(linkString),'">',str(linkString),'</a>'])

# Verpacke den Link zur Website in einen HTML <a> Tag als Email Link
def linkToHtmlEmailLink(linkString):
    return ''.join(['<a href="mailto:',str(linkString),'">',str(linkString),'</a>'])

# Generiert einheitliche Abschluss Namen für saubere Filter
def getSimpleDegreeName( abschluss ):
    result = ""
    if( "bachelor" in abschluss.lower() ):
        result = "Bachelor"
    elif( "master" in abschluss.lower() ):
        result = "Master"
    elif( "diplom" in abschluss.lower() ):
        result = "Diplom"
    elif( "magister" in abschluss.lower() ):
        result = "Magister"
    elif( "kirchlich" in abschluss.lower() ):
        result = "Kirchlicher Abschluss"
    elif( "theologisch" in abschluss.lower() ):
        result = "Theologische Prüfung"
    elif( "staatsexamen" in abschluss.lower() or "lehramt" in abschluss.lower() ):
        result = "Staatsexamen"
    elif( "konzertexamen" in abschluss.lower() ):
        result = "Konzertexamen"
    elif( "lizentiat" in abschluss.lower() ):
        result = "Lizentiatsprüfung"
    elif( "fakultätsexamen" in abschluss.lower() ):
        result = "Fakultätsexamen"
    else:
        result = "Abschlussprüfung"
    return result

def parseCourse(link):
    session = HTMLSession()
    r = session.get(link)
    _courseDict = {
        "link": link
    }

    headerTag = r.html.find(".header > p")
    if len(headerTag) < 2:
        raise Exception('Fehlerhafter Link')
    header = processTitleString( headerTag[1].text )
    _courseDict["studiengang"] = header[0]
    _courseDict["institut"] = header[1]
    _courseDict["tag"] = header[1].replace(",","")
    _courseDict["institutart"] = header[2]
    _courseDict["ort"] = header[3]

    # Ersten Tab durchlaufen
    for entry in r.html.find("#tab1.tab-content div"):

        tempEntryTitle = removeUmlautsLower(str(entry.find("h2",first=True).text))
        tempEntryContent = str(entry.find("p",first=True).text)

        # Für das Feld Abschluss, checken ob etwas geändert werden soll
        if tempEntryTitle == 'abschluss':
            _courseDict[ tempEntryTitle ] = tempEntryContent
            _courseDict[ "simple-abschluss" ] = getSimpleDegreeName( tempEntryContent )
            
        # Regelstudienzeit in ein Integer umwandeln für einfacheres filtern
        elif tempEntryTitle == 'regelstudienzeit':
            semesterZahl = tempEntryContent.replace("Semester","").strip()
            if is_number(semesterZahl):
                _courseDict[ tempEntryTitle ] = int(semesterZahl)

        # Manchmal sind Studienbeiträge ein Link, in dem Fall das HTML Linkkonstrukt bilden
        elif tempEntryTitle == 'studienbeitraege':
            if( "https://" in tempEntryContent.lower() ):
                _courseDict[ tempEntryTitle ] = linkToHtmlLink( tempEntryContent )
            else:
                _courseDict[ tempEntryTitle ] = tempEntryContent

        else:
            _courseDict[ tempEntryTitle ] = tempEntryContent

    # Zweiten Zab durchlaufen
    for entry in r.html.find("#tab2.tab-content div"):

        tempEntryTitle = removeUmlautsLower(str(entry.find("h2",first=True).text))
        tempEntryContent = str(entry.find("p",first=True).text)

        # Verpacke den Link zur Website in einen HTML <a> Tag
        if( tempEntryTitle == 'webseite' or tempEntryTitle == 'zulassungsvoraussetzungen (link)' ):
            _courseDict[ tempEntryTitle ] = linkToHtmlLink(tempEntryContent)

        elif( tempEntryTitle == 'zugangsvoraussetzungen (inland)'):
            if tempEntryContent == "":
                tempEntryContent = "Keine Angaben"
            _courseDict[ tempEntryTitle ] = addNewLineTags(tempEntryContent)

        else:
            _courseDict[ tempEntryTitle ] = tempEntryContent

    # Adressfeld rechts durchlaufen
    address = r.html.find("address",first=True)

    # Wenn keine Adresse existiert, überspringen
    if(address):

        _courseDict["adresse-name"] = address.find("h5",first=True).text
        _courseDict["adresse-subname"] = address.find("p")[0].text
        kontaktDaten = address.find("p")[1].text.replace("Weblink »","").replace("\n\n","\n") # Adresse wird nochmal in Einzelteile zerlegt

        adresseLinkArr = list(address.links)
        if adresseLinkArr:
            _courseDict["adresse-email"] = linkToHtmlEmailLink(str(address.find('a')[0].text))
            _courseDict["adresse-link"] = linkToHtmlLink(str(list(address.links)[0]))

        #Email aus den Kontaktdaten entfernen da sie sonst doppelt vorhanden wäre
        adressEmailIndex = kontaktDaten.find('@')
        if adressEmailIndex >= 0:
            kontaktDaten = kontaktDaten[0:adressEmailIndex]
            res = kontaktDaten.rfind("\n")
            kontaktDaten = kontaktDaten[0:res]

        # Splittet die Kontaktdaten in einzelne Zeilen
        arrAdress = kontaktDaten.split("\n") # 0 ist Strasse, 1 ist PLZ/STADT, 3/4 sind Tel/Fax
        arrCity = arrAdress[1].split(" ") # 0 ist PLZ, 1 ist Stadt
        _courseDict["adresse-strasse"] = arrAdress[0]
        _courseDict["adresse-plz"] = arrCity[0]
        _courseDict["adresse-stadt"] = arrCity[1]
        for entry in arrAdress:
            if "tel.:" in entry.lower():
                _courseDict["adresse-tel"] = entry
            elif "fax:" in entry.lower():
                _courseDict["adresse-fax"] = entry

    # Checke ob bestimmte Felder vorhanden sind die teilweise Fehlen können
    if not 'vorlesungszeit' in _courseDict:
        _courseDict['vorlesungszeit'] = 'Keine Angaben'
    if not 'studienbeitraege' in _courseDict:
        _courseDict['studienbeitraege'] = 'Keine Angaben'
    if not 'schwerpunkte im hauptstudium' in _courseDict:
        _courseDict['schwerpunkte im hauptstudium'] = 'Keine Angaben'
    if not 'webseite' in _courseDict:
        _courseDict['webseite'] = 'Keine'

    # Generiert eine formatierte Table Row
    def mkTr( col1 , col2 ):
        return "<tr><td style=\"font-weight: bold;padding: 0;background-color: white;border: none;width:40%;\">"+col1+"</td><td style=\"padding: 0;background-color: white;border: none;\">"+col2+"</td></tr>"

    # Einen Excerpt zusammenbauen aus mehreren einzelnen Teilen, ähnlich den Posts auf daad.de
    studienbeitraegeExcerpt = _courseDict['studienbeitraege']
    if( _courseDict['studienbeitraege'] != 'Keine' ):
        studienbeitraegeExcerpt = "Hinweise beachten"

    excerptContent = mkTr( "Abschluss" , _courseDict["abschluss"] )+mkTr( "Studienbeiträge" , studienbeitraegeExcerpt )+mkTr( "Sprache" , _courseDict["hauptunterrichtssprache"] )+mkTr( "Zulassungssemester" , _courseDict["zulassungssemester"] )
    # Post excerpt generieren aus vorhandenen Feldern
    _courseDict['excerpt'] = "<table><tbody>"+excerptContent+"</tbody></table>"

    return _courseDict

# =====================================
# Speicher Vorgang als Funktion
# =====================================

def saveCourseDataFiles(courseData,retryList):
    # Check ob Links aus Error Datei geladen werden sollen
    if USE_ERROR_FILE:

        # Lädt die eigentliche Datei der Daten in die die neuen eingefügt werden sollen
        with open( COURSE_FILE_NAME , "r") as file:
            data = json.load(file)

        # Fügt neue ein
        data += courseData
        jsonFile = open( COURSE_FILE_NAME , "w", encoding='utf-8')
        jsonFile.write( json.dumps(data,ensure_ascii=False) )

    else:
        jsonFile = open( COURSE_FILE_NAME , "w", encoding='utf-8')
        jsonFile.write( json.dumps(courseData,ensure_ascii=False) )

    # Speichern abschliessen
    jsonFile.close()

    # Schreibt die Fehlerhaften Links in eine Textdatei
    with open( ERROR_COURSE_FILE_NAME , "w") as errorListFile:
        for line in retryList:
            errorListFile.write(line)

    print( "Es wurden " + str(len(courseData)) + "/" + str(MAX_COURSES) + " Studiengänge erfolgreich geladen. Die Links aller Fehlerhaften wurden in die Datei " + ERROR_COURSE_FILE_NAME + " kopiert." )


# ============================= Main - Studiengang Content =============================

print("Daten der jeweiligen Studiengänge werden gesammelt...")

courseData = []
timeoutErrors = 0

retryList = [] # Errorliste wird danach gespeichert um sie nochmal ausführen zu können
               # Aus irgendeinem Grund sind die Seiten auf die einen Timeout Error hatten
               # erst dann speicherbar wenn das Programm einmal neugestartet hat.
               # Dummer fix aber funktioniert

# Eigentlicher Durchlauf der Studiengänge, gelegentlich werden timeouts vorkommen die sich nicht vermeiden lassen
# wenn diese vortreten speichern wir sie in einer neuen Liste
for courseIndex in range(START_INDEX_COURSES,MAX_COURSES):

    if( courseIndex > MAX_COURSES or courseIndex >= len(courseList) ):
        break
    try:
        print(str(courseIndex+1)+"/"+str(len(courseList)))
        courseData.append( parseCourse( courseList[courseIndex] ) )

    # Speichert den aktuellen Fortschritt wenn der Nuter mit CTRL + C das Programm beendet
    except KeyboardInterrupt as userQuitExc:
        saveCourseDataFiles(courseData,retryList)
        sys.exit()
    except Exception as e:
        print(e)
        print(str(courseIndex)+' Übersprungen: Site Timeout')
        timeoutErrors = timeoutErrors + 1
        retryList.append( courseList[courseIndex] )

saveCourseDataFiles(courseData,retryList)