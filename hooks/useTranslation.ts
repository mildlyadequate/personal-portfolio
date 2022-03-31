import { useRouter } from "next/router";
import { convertStrings } from "../util/LocaleUtils";

const LOCALE_DATA = {

    // ========== META ==========
    page_url: {
        en: "https://sebastian-schuler.com/en",
        de: "https://sebastian-schuler.com/de",
    },
    html_index_title: {
        en: "Portfolio: Sebastian Schuler",
        de: "Portfolio: Sebastian Schuler",
    },
    html_index_desc: {
        en: "Sebastian Schuler is a Full-Stack Developer, Digital Marketing Specialist, UX Designer, and Android Developer.",
        de: "Sebastian Schuler ist ein Full-Stack-Entwickler, Online Marketing Manager, UX-Designer und Android-Entwickler.",
    },
    html_language_selected: {
        en: "English",
        de: "German",
    },

    // ========== To Top Button ==========
    button_to_top_text: {
        en: "Back to Top",
        de: "Zurück nach Oben",
    },
    // ========== 404 Page - Page not found ==========
    page_notfound_title: {
        en: "404 - Page not found",
        de: "404 - Seite nicht gefunden",
    },
    page_notfound_subtitle: {
        en: "PAGE NOT FOUND",
        de: "SEITE NICHT GEFUNDEN",
    },
    page_notfound_text: {
        en: "The page you were looking for might have been removed, it's name changed, or is temporarily unavailable.",
        de: "Die von dir gesuchte Seite wurde möglicherweise entfernt, ihr Name wurde geändert oder sie ist vorübergehend nicht verfügbar.",
    },
    page_notfound_home_button: {
        en: "Home",
        de: "Startseite",
    },

    // ========== Form Success Notification ==========
    form_success_title: {
        en: "Success",
        de: "Erfolg",
    },
    form_success_msg: {
        en: "I received your message and will respond shortly.",
        de: "Ich habe Ihre Nachricht erhalten und werde in Kürze antworten.",
    },

    // ========== NAV ==========
    nav_mni_about: {
        en: "About",
        de: "Über Mich",
    },
    nav_mni_experience: {
        en: "Experience",
        de: "Erfahrung",
    },
    nav_mni_work: {
        en: "Work",
        de: "Projekte",
    },
    nav_contact_button: {
        en: "Contact",
        de: "Kontakt",
    },
    nav_contact_button_alt: {
        en: "Send me a message",
        de: "Schreib mir eine Nachricht"
    },
    nav_menu_label: {
        en: "Open menu",
        de: "Menü öffnen",
    },

    // ========== SIDE-ELEMENTS ==========
    side_email_title: {
        en: "Send me an E-mail",
        de: "Schick mir eine E-Mail",
    },

    // ========== HERO ==========
    hero_top_line: {
        en: "Hi, my name is",
        de: "Hi, mein Name ist",
    },
    hero_typing_before: {
        en: "I'm a ",
        de: "Ich bin ",
    },
    hero_typing_1: {
        en: "Full-Stack Developer",
        de: "Full-Stack Entwickler",
    },
    hero_typing_2: {
        en: "Digital Marketing Specialist",
        de: "Online Marketing Manager",
    },
    hero_typing_3: {
        en: "Mobile Android Developer",
        de: "Android Developer",
    },
    hero_typing_4: {
        en: "UX Designer",
        de: "UX Designer",
    },
    hero_description: {
        en: "I'm passionate about bringing forward great and human-centered products; whether that's through development, UX Design, or Online Marketing.",
        de: "Meine Leidenschaft ist es, großartige und menschenzentrierte Produkte zu schaffen, sei es durch Entwicklung, UX Design oder Online Marketing.",
    },
    hero_button_read_more: {
        en: "Learn more",
        de: "Mehr erfahren",
    },
    hero_button_read_more_alt: {
        en: "Learn more about me",
        de: "Mehr über mich erfahren",
    },
    hero_language_switch_before: {
        en: "My homepage offered in: ",
        de: "Meine Homepage angeboten in: ",
    },
    hero_language_switch_alt: {
        en: "Die Sprache zu Deutsch ändern",
        de: "Change the language to English",
    },
    // ========== ABOUT ==========
    about_header: {
        en: "About Me",
        de: "Über mich",
    },
    about_image_alt:{
        en: "Sebastian Schuler on top of a mountain in France",
        de: "Sebastian Schuler auf dem Gipfel eines Berges in Frankreich",
    },
    about_paragraph1: {
        en: `Hi there! My name is Sebastian and I enjoy creating applications as well as digital projects. My interest in development started back in 2012 
        when I signed up for my schools computer science class. As I found it very interesting, I decided to change to a more development focused school.`,
        de: `Hi! Ich heisse Sebastian und entwickle sowohl Anwendungen als auch digitale Projekte. Mein Interesse an der Software Entwicklung begann im Jahr 2012,
        als ich mich im Informatik-Kurs der Schule angemeldet hatte. Davon war ich so begeistert, dass ich auf die BBS SÜW wechselte, um meinen Fokus voll 
        auf die Anwendungsentwicklung zu legen.`,
    },
    about_paragraph2: {
        en: `Since I've always been passionate about many different types of digital media, the Digital Media Marketing program was my first choice. 
        Despite the name, the focus was on the three main categories: Computer Science, Marketing, and UX Design.`,
        de: `Da ich mich schon immer für viele verschiedene Richtungen der digitalen Medien begeistern konnte, war der Digital Media Marketing Studiengang meine erste Wahl.
        Trotz des Namens war der Fokus hier auf den drei Hauptrichtungen: Informatik, Marketing und UX Design.`,
    },
    about_paragraph_footer_1: {
        en: "More details about me can be found in the next section ",
        de: "Mehr Details zu mir sind im nächsten Abschnitt ",
    },
    about_paragraph_footer_2: {
        en: ". You could also have a look at my ",
        de: " zu finden. Alternativ kannst du auch direkt meine ",
    },
    about_paragraph_footer_3: {
        en: " straight away.",
        de: " anschauen.",
    },
    about_technologies_title: {
        en: "Technologies",
        de: "Technologien",
    },
    about_technologies_desc: {
        en: "I've worked with:",
        de: "mit denen ich gearbeitet habe:",
    },
    about_tools_title: {
        en: "Tools",
        de: "Tools",
    },
    about_tools_desc: {
        en: "I have experience with:",
        de: "mit denen ich Erfahrung habe:",
    },
    // ========== EXPERIENCE ==========
    experience_header: {
        en: "Experience",
        de: "Erfahrung",
    },

    // Item 4: HSKL
    experience_item4_title: {
        en: "HS KL",
        de: "HS KL",
    },
    experience_item4_header: {
        en: "Digital Media Marketing - BSc",
        de: "Digital Media Marketing - BSc",
    },
    experience_item4_institution: {
        en: "@University of Applied Sciences Kaiserslautern",
        de: "@Hochschule Kaiserslautern",
    },
    experience_item4_time: {
        en: "2017 - 2022",
        de: "2017 - 2022",
    },
    experience_item4_desc: {
        en: `<ul> 
                <li>The goal of the <a target="_blank" href="https://www.hs-kl.de/en/informatik-und-mikrosystemtechnik/studiengaenge/digital-media-marketing">course</a> 
                is the career-oriented education of computer scientists with basic skills in marketing and digital content creation.</li> 
                <li>Acquired Skills include, but are not limited to, web development, Java desktop programming, SEO, CMS, online marketing, UX design, databases, 
                and app development.</li> 
                <li>I completed numerous projects as part of my studies, many of which can be found in the next section.</li> 
            </ul>`,
        de: `<ul>
                <li>Das Ziel des <a target="_blank" href="https://www.hs-kl.de/informatik-und-mikrosystemtechnik/studiengaenge/digital-media-marketing">Studiengangs</a> ist die 
                berufsorientierte Ausbildung von Informatiker:innen mit Grundkompetenzen im Marketing und der Digital Content Creation.</li>
                <li>Zu den erworbenen Kompetenzen gehören u.a. Webentwicklung, Java Desktop Programmierung, SEO, CMS, Online Marketing, UX Design, 
                Datenbanken, App Entwicklung und mehr.</li>
                <li>Im Rahmen meines Studiums habe ich zahlreiche Projekte absolviert, von denen einige im nächsten Abschnitt zu finden sind.</li>
            </ul>`,
    },

    // Item 3: UXQB
    experience_item3_title: {
        en: "UXQB",
        de: "UXQB",
    },
    experience_item3_header: {
        en: "Certified Professional for Usability and UX - Foundation Level",
        de: "Certified Professional for Usability and UX - Foundation Level",
    },
    experience_item3_institution: {
        en: "@International Software Quality Institute",
        de: "@International Software Quality Institute",
    },
    experience_item3_time: {
        en: "Completed in 2017",
        de: "Abgeschlossen in 2017",
    },
    experience_item3_desc: {
        en: `<p>The UXQB - CPUX-F certificate attests that I am familiar with the basic terms and concepts of usability and user experience, and that I'm able to
        apply them in the following areas of competence:</p>
        <ul> 
            <li>The human-centred design process</li> 
            <li>Definitions, concepts and guidelines</li> 
            <li>Understanding and specifying the context of use</li>
            <li>Specifying the user requirements</li> 
            <li>Producing design solutions</li> 
            <li>Usability-Tests</li> 
            <li>Usability inspections and user surveys</li> 
        </ul>
        <p>Source: <a href="https://uxqb.org/en/certification/foundation-level-cpux-f/">UXQB</a></p>` ,
        de: `<p>Das UXQB - CPUX-F Zertifikat bescheinigt, dass ich mit den grundlegenden Begriffen und Konzepten aus dem Fachgebiet Usability und User Experience
        vertraut bin. Zu diesen gehören folgende Kompetenzfelder:</p>
        <ul> 
            <li>Der menschzentrierte Gestaltungsprozess</li> 
            <li>Begriffe, Konzepte und Richtlinien</li> 
            <li>Verstehen und Spezifizieren des Nutzungskontextes</li>
            <li>Spezifizieren der Nutzungsanforderungen</li> 
            <li>Erzeugen von Gestaltungslösungen</li> 
            <li>Usability-Tests</li> 
            <li>Inspektionen und Benutzerbefragungen</li> 
        </ul>
        <p>Quelle: <a href="https://uxqb.org/de/zertifizierung/basiszertifizierung-cpux-f/">UXQB</a></p>`,
    },

    // Item 2: EDV Höhne
    experience_item2_title: {
        en: "EDV Höhne",
        de: "EDV Höhne",
    },
    experience_item2_header: {
        en: "Software Developer / Internship",
        de: "Software Entwickler / Praktikant",
    },
    experience_item2_institution: {
        en: "@EDV Höhne",
        de: "@EDV Höhne",
    },
    experience_item2_time: {
        en: "2015 - 2016",
        de: "2015 - 2016",
    },
    experience_item2_desc: {
        en: `<ul>
                <li>I had to complete at least half a year of internship in order to get the apprenticeship recognized as part of my high school diploma (A-Level). 
                I was able to learn a lot during my time here, as the company gave me the opportunity to work full time as a software developer.</li>
                <li>Used technologies included Visual Basic, Java, Android, and SQL. My biggest project was the creation of an interface for the internal phone system 
                that automatically displayed the status of employees and allows routing between departments.</li>
            </ul>`,
        de: `<ul>
                <li>Im Rahmen meines Schulabschlusses musste ich mindestens ein halbes Jahr Praktikum absolvieren, um die Ausbildung anerkannt zu bekommen. 
                Da der Betrieb mir die Möglichkeit gab vollwertig als Software Entwickler zu arbeiten, konnte ich in meiner Zeit hier viel lernen.</li>
                <li>Genutzte Technologien waren u.a. Visual Basic, Java, Android und SQL. Mein größtes Projekt war das erstellen eines Interface für das 
                interne Telefonsystem, das automatisch den Status der Mitarbeiter anzeigt und die Weiterleitung zwischen Abteilungen ermöglicht.</li>
            </ul>`,
    },

    // Item 1: BBS
    experience_item1_title: {
        en: "BBS SÜW",
        de: "BBS SÜW",
    },
    experience_item1_header: {
        en: "A-Level / Assistant for Application Development",
        de: "Fachabitur / Assistent für Anwendungsentwicklung",
    },
    experience_item1_institution: {
        en: "@BBS SÜW",
        de: "@BBS SÜW",
    },
    experience_item1_time: {
        en: "2014 - 2015",
        de: "2014 - 2015",
    },
    experience_item1_desc: {
        en: `<ul>
                <li>Here was my first 'professional' touch point with computer science and programming. The degree consists of two parts: 
                A-Levels to study at universities, and an apprenticeship as an assistant for application development.</li>
                <li>The topics were mainly Java programming, hardware and electrical engineering.</li>
                <li>My final project was an Android app including a backend that could scan food barcodes and warn users, 
                if any of their allergies were affected.</li>
            </ul>`,
        de: `<ul>
                <li>Hier war mein erster 'professioneller' Kontaktpunkt mit Informatik und Programmierung. Der Abschluss besteht aus zwei Teilen: 
                dem Fachabitur um an Hochschulen zu studieren und einer Ausbildung als Assistent für Anwedungsentwicklung.</li>
                <li>Die Themen waren hier hauptsächlich Java Programmierung, Hardware und Elektrotechnik.</li>
                <li>Mein Abschlussprojekt war eine Android App inklusive Backend, die Lebensmittelbarcodes scannen konnte und Nutzer gewarnt hat, 
                falls eine ihrer Allergien betroffen sind.</li>
            </ul>`,
    },

    // ========== WORK ==========
    work_header: {
        en: "Work",
        de: "Projekte",
    },
    work_featured_overline: {
        en: "Featured Project",
        de: "Projekte im Fokus",
    },
    work_featured_image_alt: {
        en: "Thumbnail for ",
        de: "Vorschaubild für ",
    },
    work_other_projects_title: {
        en: "Other Projects",
        de: "Andere Projekte",
    },
    work_other_projects_subtext: {
        en: "Scroll down or open the archive to see all of my projects in chronological order.",
        de: "Scroll nach unten oder öffne das Archiv, um alle meine Projekte in chronologischer Reihenfolge zu sehen.",
    },
    work_other_subtitle: {
        en: "View the archive",
        de: "Archiv öffnen",
    },
    work_archive_internal_link: {
        en: "/archive",
        de: "/archiv",
    },
    work_other_button_show_more: {
        en: "Show More",
        de: "Mehr anzeigen",
    },
    work_other_button_show_less: {
        en: "Show Less",
        de: "Weniger anzeigen",
    },

    // ========== CONTACT ==========
    contact_header: {
        en: "Contact Me",
        de: "Schreib mir eine Nachricht",
    },

    // ============================== ARCHIVE PAGE ==============================

    archive_page_title: {
        en: "Archive - Portfolio: Sebastian Schuler",
        de: "Archiv - Portfolio: Sebastian Schuler",
    },
    archive_header: {
        en: "Archive",
        de: "Archiv",
    },
    archive_subheader: {
        en: "A list of things I've worked on.",
        de: "Eine Liste von Projekten, an denen ich gearbeitet habe.",
    },
    archive_table_year: {
        en: "Year",
        de: "Jahr",
    },
    archive_table_title: {
        en: "Title",
        de: "Titel",
    },
    archive_table_tags: {
        en: "Technology",
        de: "Technologie",
    },
    archive_table_links: {
        en: "Links",
        de: "Links",
    },
    archive_table_mobile: {
        en: "Projects",
        de: "Projekte",
    },
    archive_project_link_alt: {
        en: "Project details: ",
        de: "Projektdetails: ",
    },
    archive_project_external_alt: {
        en: "To the app / project",
        de: "Zur App / Projekt",
    },

    // ============================== PROJECTS RECURRING ==============================

    project_topline_university: {
        en: "University of Applied Sciences Kaiserslautern",
        de: "Hochschule Kaiserslautern",
    },

    project_topline_personal: {
        en: "Personal Project",
        de: "Eigenes Projekt",
    },

    project_section_intro_heading: {
        en: "Introduction",
        de: "Einführung",
    },
    project_section_gallery_heading: {
        en: "Gallery",
        de: "Galerie",
    },

    // ========== BREADCRUMBS ==========
    index_breadcrumb_name: {
        en: "Home",
        de: "Startseite",
    },
    archive_breadcrumb_name: {
        en: "Archive",
        de: "Archiv",
    },
    archive_link_text: {
        en: "To the Archive",
        de: "Zum Archiv",
    },
    // ========== Project Post ==========
    project_table_of_contents_title: {
        en: "Table of contents",
        de: "Inhaltsverzeichnis",
    },
    // ========== ZOOMED IMAGE ==========
    zoomed_image_desc_numbering: {
        en: "Fig.",
        de: "Abb.",
    },

    // ============================== PROJECT MARKETING ACADEMY ==============================

    project_marketingacademy_internal_link: {
        en: "/archive/marketing-academy",
        de: "/archiv/marketing-akademie",
    },
    project_marketingacademy_page_title: {
        en: "Marketing Academy - Portfolio: Sebastian Schuler",
        de: "Marketing Akademie - Portfolio: Sebastian Schuler",
    },
    project_marketingacademy_title: {
        en: "Marketing Academy",
        de: "Marketing Akademie",
    },
    project_marketingacademy_desc: {
        en: `Development of a CMS based website for the Marketing Academy of the University of Kaiserslautern 
        using the given corporate identity design and drafts of a visual marketing campaign.`,
        de: `Entwicklung einer CMS basierten Website für die Marketing Akademie der <a href="https://www.hs-kl.de/" target="_blank">Hochschule Kaiserslautern</a>
        basierend auf dem vorgegeben Corporate Identity Design und Entwürfen einer Visual Marketing Kampagne.`,
    },
    project_marketingacademy_section_introduction_p1: {
        en: `The project describes the development of concepts, the establishment of cooperations and the timely implementation of the website with the content management system.
        The Marketing Academy is about sustainable networking between university, companies, students and employees in the context of teaching, research, 
        and beyond.`,
        de: `Das Projekt beschreibt die Entwicklung von Konzepten, den Aufbau von Kooperationen und um die zeitnahe Umsetzung der Webseite mit dem Content Management System.
        Bei der Marketing Akademie geht es um die nachhaltige Vernetzung zwischen Hochschule, Unternehmen, Studierenden und Mitarbeiter:innen im Rahmen von Lehre, Forschung 
        und darüber hinaus.`,
    },
    project_marketingacademy_section_introduction_p2: {
        en: `The focus of the Marketing Academy are cooperations between companies, organizations and universities in online/visual marketing, 
        CMS, financial education, social media, Bitcoin and app marketing/usability, based on teaching content, study projects, third-party funded projects 
        or cooperations beyond that.`,
        de: `Der Fokus der Marketing Akademie sind Kooperationen zwischen Unternehmen, Organisationen und Hochschule im Bereich 
        Online/Visual Marketing, CMS, Financial Education, Social Media, Bitcoin und App Marketing / Usability, 
        basierend auf Lehrinhalten, Studienprojekten, Drittmittelprojekten oder darüber hinausgehende Kooperationen.`,
    },
    project_marketingacademy_section_research_heading: {
        en: "Competitor Research",
        de: "Competitor Research",
    },
    project_marketingacademy_section_research_p1: {
        en: `At the beginning of the project, our focus was on building a meaningful information architecture. For this purpose, we analyzed numerous direct and indirect competitors
        and combined the results in a table with the requirements of our customer (University of Applied Sciences Kaiserslautern).`,
        de: `Zu Anfang des Projekts lag unser Fokus darauf, eine sinnvolle Informationsarchitektur aufzubauen. Dazu haben wir zahlreiche direkte und indirekte Konkurrenten
        analysiert und die Ergebnisse in einer Tabelle, mit den Ansprüchen unseres Kunden (Hochschule Kaiserslautern) kombiniert.`,
    },
    project_marketingacademy_section_research_p2: {
        en: `Exactly 60% of the tested sites had a 'News' or 'Blog' page that displayed recent agency news. At this point, technology
        and risks had to be considered, in the example of the 'News' page a news system is necessary. Possible risks were maintenance and dependency on plugins.`,
        de: `Genau 60% der Websites eine 'News' oder 'Blog' Seite, die aktuelle Nachrichten der Agentur anzeigt. An dieser Stelle mussten Technologie
        und Risiken bedacht werden, im Beispiel der 'News' Seite ist ein News System notwendig. Mögliche Risiken waren hierbei die Wartung und die Abhängigkeit an Plugins.`,
    },
    project_marketingacademy_section_design_heading: {
        en: "Design",
        de: "Design",
    },
    project_marketingacademy_section_design_html: {
        en: `<p>In developing the design, we took our inspiration from the first project of the Marketing Academy, the website of the fitness application 
        <a title="n*soria Website" href="https://www.nsoria.io">n*soria</a>. Using the CI manual, the next step was creating all the unique pages as a
        design prototype in Adobe XD and testing them for usability.</p>`,
        de: `<p>Bei der Entwicklung des Designs haben wir uns am ersten Projekt der Marketing Akademie orientiert, der Website der Fitnessapp 
        <a title="n*soria Website" href="https://www.nsoria.io">n*soria</a>. Mithilfe des CI Manual habe ich im nächsten Schritt alle einzigartigen Seiten als
        Design-Prototyp in Adobe XD erstellt und auf Usability getestet.</p>`,
    },
    project_marketingacademy_section_technology_heading: {
        en: "Technology selection",
        de: "Wahl der Technologie",
    },
    project_marketingacademy_section_technology_p1: {
        en: `All the information gathered so far is now used to select the right technology for the project. All current CMS and 
        e-commerce systems (the requirements included a shop) were compared with each other. Systems were eliminated step by step, based on our situation
        and requirements, until only three combinations were left.</br>
        Possible combinations were WordPress + WooCommerce, Typo3 + Magento and WordPress + Magento. Finally, we decided on WordPress in combination with WooCommerce 
        for the following reasons:
        <ul>
            <li>Fast setup on local server: The site should be hosted on the university server.</li>
            <li>No programming skills necessary: Since the majority of my team had poor programming skills, WordPress was a good compromise.</li>
            <li>The supervising professor was interested in testing and documenting the possibilities, problems and features of WordPress/WooCommerce.</li>
            <li>The latest Typo3 version we previusly used worked with, was still very poorly documented and most of the plugins were not available at the time.</li>
        </ul>`,
        de: `Alle bisher gesammelten Informationen werden nun genutzt, um die richtige Technologie für das Projekt auszuwählen. Es wurden alle gängigen CMS und 
        E-Commerce Systeme (zu den Anforderungen gehört u.a. ein Shop) miteinander verglichen. Schrittweise wurden Systeme ausgeschlossen basierend auf unserer Situation
        und den Anforderungen, bis nur noch drei Kombinationen übrig waren. </br>
        Mögliche Kombinationen waren WordPress + WooCommerce, Typo3 + Magento und WordPress + Magento. Schlussendlich haben wir uns aus folgenden Gründen
        für WordPress in Verbindung mit WooCommerce entschieden:
        <ul>
            <li>Schnelles Setup auf lokalem Server: Die Seite sollte auf dem Hochschulserver gehosted werden.</li>
            <li>Keine Programmierkenntnisse notwendig: Da die Mehrheit meines Teams nur schlechte programmierkenntnisse hatte, war WordPress ein guter Kompromiss.</li>
            <li>Interesse des Betreuenden Professors die Möglichkeiten, Probleme und Eigenschaften von WordPress/WooCommerce zu testen und zu dokumentieren.</li>
            <li>Die aktuellste Typo3 Version mit der wir zuvor gearbeitet haben war an diesem Zeitpunkt noch sehr schlecht dokumentiert und die meisten Plugins
            noch nicht verfügbar.</li>
        </ul>`,
    },
    project_marketingacademy_section_plugins_heading: {
        en: "Plugins",
        de: "Plugins",
    },
    project_marketingacademy_section_plugins_p1: {
        en: `
        <ul>
            <li><a target="_blank" href="https://elementor.com/">Elementor</a>: Replaces the default WYSIWYG editor of WordPress and offers numerous features, 
            widgets, and themes. Essential for our project because of the 'Conditional Templating' feature, which allows us to 
            create templates for generated pages (e.g. project/news pages) in a very elegant fashion.</li>
            <li><a target="_blank" href="https://woocommerce.com/">WooCommerce</a>: Provides both front-end and back-end for the shop.</li>
            <li><a target="_blank" href="https://theseoframework.com/">The SEO Framework</a>: Takes care of all SEO specific tasks of the site for free, 
            without unnecessary extras.</li>
            <li><a target="_blank" href="https://wordpress.org/plugins/all-in-one-wp-migration/">All-in-One WP Migration</a>: Create backups of the entire system, 
            including plugins.</li>
        </ul>`,
        de: `
        <ul>
            <li><a target="_blank" href="https://elementor.com/">Elementor</a>: Ersetzt den Standard WYSIWYG-Editor von WordPress und bringt zahlreiche Features, 
            Widgets und Themes mit sich. Für unser Projekt absolut notwendig wegen des 'Conditional Templating' Features, das es uns erlaubt, Templates für generierte Seiten 
            (z.B. Projekt/News Seiten) sehr elegant zu erstellen.</li>
            <li><a target="_blank" href="https://woocommerce.com/">WooCommerce</a>: Bietet sowohl Front- als auch Backend für den Shop.</li>
            <li><a target="_blank" href="https://theseoframework.com/">The SEO Framework</a>: Übernimmt kostenlos alle SEO spezifischen Aufgaben der Seite, 
            ohne unnötige Extras.</li>
            <li><a target="_blank" href="https://wordpress.org/plugins/all-in-one-wp-migration/">All-in-One WP Migration</a>: Backups des gesamten Systems, inklusive Plugins erstellen.
            </li>
        </ul>`,
    },
    project_marketingacademy_section_implementation_heading: {
        en: "Implementation",
        de: "Implementierung",
    },
    project_marketingacademy_section_implementation_p1: {
        en: `Thanks to Elementor, the actual implementation is relatively simple: we specified what kind of templating to use for each page, e.g. 
        Conditional Templating for the glossary, the projects, and the news. Competences and services were created manually based on a "parent template". Unique pages such as the start and contact page have no templating at all.`,
        de: `Dank Elementor ist die eigentliche Implementierung relativ simpel: Wir haben festgelegt welche Art von Templating für jede Seite genommen wird, z.B. 
        Conditional Templating für den Glossar, die Projekte und die News. Kompetenzen und Leistungen wiederrum haben ein "Elterntemplate" bekommen und wurden
        manuell aus diesem Erstellt. Einzigartige Seiten wie die Start- und Kontaktseite haben kein weiteres Templating.`,
    },
    project_marketingacademy_section_files_heading: {
        en: "Documentation",
        de: "Dokumentation",
    },
    project_marketingacademy_section_files_p1: {
        en: `
        <ul>
            <li><a target="_blank" href="/files/docs-marketingakademie-redacted.pdf">Documentation [PDF]</a></li>
            <li><a target="_blank" href="/files/feature-overview-marketingakademie.xlsx">Feature Overview [Excel/GSheets]</a></li>
        </ul>`,
        de: `
        <ul>
            <li><a target="_blank" href="/files/docs-marketingakademie-redacted.pdf">Dokumentation [PDF]</a></li>
            <li><a target="_blank" href="/files/feature-overview-marketingakademie.xlsx">Feature Übersicht [Excel/GSheets]</a></li>
        </ul>`,
    },
    // Image Descs
    project_marketingacademy_image_desc_cimanual: {
        en: `CI Manual: Describes design specifications and guidelines for our project.`,
        de: `CI Manual: Beschreibt Designvorgaben und Richtlinien für unser Projekt.`,
    },
    project_marketingacademy_image_desc_skills: {
        en: `The skills page links to all skill articles and serves as an overview.`,
        de: `Die Kompetenzen-Seite verlinkt auf alle Kompetenzen-Artikel und dient als Übersicht.`,
    },
    project_marketingacademy_image_desc_projects: {
        en: `The project page is an automatically generated blog that lists all projects.`,
        de: `Die Projekt-Seite ist ein automatisch generierter Blog, der alle Projekte auflistet.`,
    },
    project_marketingacademy_image_desc_glossary: {
        en: `The glossary is another means of search engine optimization by linking internal pages.`,
        de: `Der Glossar ist ein weiteres Mittel der Suchmaschinenoptimierung durch Verlinkung interner Seiten.`,
    },
    project_marketingacademy_image_desc_glossary_entry: {
        en: `A single glossary entry explains the term and links to other glossary entries and articles in which it is mentioned.`,
        de: `Glossareintrag beschreibt den Begriff, aber verlinkt auch auf andere Glossareinträge und Artikel in denen er genannt wird.`,
    },
    // ============================== PROJECT STUDIENVERZEICHNIS ==============================

    project_studienverzeichnis_internal_link: {
        en: "/archive/studienverzeichnis",
        de: "/archiv/studienverzeichnis",
    },
    project_studienverzeichnis_page_title: {
        en: "University Course Directory - Portfolio: Sebastian Schuler",
        de: "Studienverzeichnis - Portfolio: Sebastian Schuler",
    },
    project_studienverzeichnis_title: {
        en: "University Course Directory",
        de: "Studienverzeichnis",
    },
    project_studienverzeichnis_desc: {
        en: `Development of a website and the appropriate backend to display and search all available university study programs in Germany. Also known as 'Studienverzeichnis' in German.`,
        de: `Entwicklung einer Website und dem passenden Backend zum Darstellen und Durchsuchen aller verfügbaren Studiengänge in Deutschland.`,
    },
    project_studienverzeichnis_section_introduction_p1: {
        en: `The main objective in this university assignment was the creation of a website which displays every course of higher education in Germany, and lets the user search and 
        filter everything. A single course entry should contain all necessary basic information and contact details. Search engine optimization of all kinds was required, as well
        as the acquisition of the actual course data.`,
        de: `Das Ziel dieses Assignments war das Erstellen einer Website, auf der alle Studiengänge in Deutschland angezeigt werden, die es dem Nutzer ermöglicht diese zu Filtern. 
        Ein einzelner Eintrag sollte alle notwendigen Basisinformationen und Kontaktangaben beinhalten. Wichtig waren die Suchmaschinenoptimierung und natürlich die Beschaffung 
        der darzustellenden Daten.`,
    },
    project_studienverzeichnis_section_introduction_p2: {
        en: `To be included in Google search, the site was publicly hosted for the course of the project. it was available at www.studienverzeichnis.de, 
        but was taken offline after completion.`,
        de: `Die Seite wurde für den Verlauf des Projekts öffentlich gehosted um in die Google Suche aufgenommen zu werden. Sie war unter www.studienverzeichnis.de verfügbar,
        wurde allerdings nach Vollendung wieder offline genommen.`,
    },
    project_studienverzeichnis_section_datacollection_heading: {
        en: "Data Collection",
        de: "Erhebung der Daten",
    },
    project_studienverzeichnis_section_datacollection_p1: {
        en: `This is where the first problems came up: I was able to request the data of all courses from the German authorities, however, this process would've not only taken too long,
        but I would also have no certainty as to which details specifically are included, and which format they're provided in. I found a solution to all of these problems in building 
        my own web scraper tool.`,
        de: `Hierbei enstanden die ersten Probleme: Ich konnte zwar den Datensatz aller Studiengänge von den Deutschen Behörden anfordern, dieser Prozess hätte allerdings nicht nur 
        zu lange gedauert, aber ich hätte auch keine Gewissheit welche Daten pro Studiengang in welchem Format bereitgestellt werden. Die Lösung für alle dieser Probleme war das
        erstellen eines eigenen Web-Scraper-Tools.`,
    },
    project_studienverzeichnis_section_datacollection_p2: {
        en: `Making use of Python and the library requests_html, I was able to first scrape
        the names and links of all courses from the German Academic Exchange Service. Once I had generated a list of all 21.000 courses, I let the script process and save all 
        available data into a .csv file on my computer. The script can be found <a href="/files/daad_studiengangs_parser.py">here</a> 
        (Basic knowledge in Python recommended).`,
        de: `Mit Hilfe von Python und der Library requests_html konnte ich zunächst die Namen und Links aller Studiengänge von der Website des DAAD bekommen. Nach dem
        erstellen der kompletten Liste aller 21,000 Einträge ließ ich das Skript alle verfügbaren Daten in eine .csv Datei auf meinen Computer speichern. Das Webscraper-Skript ist 
        <a href="/files/daad_studiengangs_parser.py">hier</a> zu finden (Kenntnisse in Python empfohlen).`,
    },
    project_studienverzeichnis_section_technology_heading: {
        en: "Technology",
        de: "Technologie",
    },
    project_studienverzeichnis_section_technology_p1: {
        en: `Since this is a university project, i.e. a very limited amount of time and no need to continue running the website after completion, I decided to use WordPress as CMS.
        It helped me achieve my goal extremely well, but in retrospect I realized how much better an implementation with React and Next could've been in terms of design, 
        performance, and flexibility. The collected data was imported into the WordPress database using the 'WP All Import' plugin.`,
        de: `Da es sich um ein Universitätsprojekt handelt, d.h. ein sehr limitierter Zeitraum und keine Notwendigkeit die Website nach Fertigstellung weiter zu betreiben, habe 
        ich mich für WordPress als CMS entschieden. Mein Ziel habe ich damit sehr gut erreicht, allerdings habe ich im Nachhinein gemerkt wie viel besser eine Umsetzung mit 
        beispielsweise React + Next gewesen wäre, besonders hinsichtlich der Performance und Flexibilität. Die gesammelten Daten wurden mithilfe des Plugins 'WP All Import' 
        in die WordPress Datenbank übernommen. `,
    },
    project_studienverzeichnis_section_technology_p2: {
        en: ` Due to the incredibly large amount of data (more than 21,000 courses) the filter function was rather sluggish, a separate database would have 
        made more sense here. Nevertheless the filter function worked and made the site a good proof-of-concept that could be developed into a finished 
        product with the right technology.`,
        de: ` Aufgrund der unheimlich großen Menge der Daten (mehr als 21.000 Studiengänge) war die Filterfunktion eher träge, eine separate Datenbank wäre 
        hier sinnvoller gewesen. Dennoch hat die Filterfunktion funktioniert und die Seite zu einem guten Proof-of-concept gemacht, das 
        mit der richtigen Technologie zu einem fertigen Produkt entwickelt werden könnte.`,
    },
    project_studienverzeichnis_section_informationarchitecture_heading: {
        en: "Information Architecture",
        de: "Informationsarchitektur",
    },
    project_studienverzeichnis_section_informationarchitecture_p1: {
        en: `The two fundamental parts of the information architecture are the degree courses and institutions. A single course element contains important dates, 
        contact details, and other important information. Each course has only one associated institution, which can appear in the menu under Institutes. These are to be 
        presented manually, with an article and the possibility to view all available courses of this institute.`,
        de: `Die zwei grundlegenden Teile der Informationsarchitektur sind die Studiengänge und Institutionen. Ein einzelnes Studiengang Element enthält wichtigen Termine, 
        Kontaktdaten und andere wichtige Informationen. Jeder Studiengang hat nur eine zugehörige Institution, die im Menu unter Institute erscheinen kann. Hier sollen diese nach und 
        nach vorgestellt werden, mit einem Artikel und der Möglichkeit alle verfügbaren Studiengänge dieses Instituts einsehen zu können.`,
    },
    // Image Descs
    project_studienverzeichnis_image_desc_frontpage: {
        en: `Studienverzeichnis (University Course Directory) - Front Page`,
        de: `Studienverzeichnis - Startseite`,
    },
    project_studienverzeichnis_image_desc_full_frontpage: {
        en: `Entire home page with search, recommendations, universities, and more`,
        de: `Ganze Startseite mit Suche, Empfehlungen, Hochschulen und mehr`,
    },
    project_studienverzeichnis_image_desc_post: {
        en: `A single post, the profile of a course in the database, that shows all the important information.`,
        de: `Ein einzelner Post, das Profil eines Studiengangs in der Datenbank, das alle wichtigen Informationen zeigt.`,
    },
    project_studienverzeichnis_image_desc_university: {
        en: `The profile of a university, is created manually but filled with courses from the database.`,
        de: `Das Profil einer Universität, wird von Hand angelegt aber mit Studiengängen aus der Datenbank befüllt.`,
    },


    // ============================== PROJECT CONVERTEE ==============================

    project_convertee_internal_link: {
        en: "/archive/convertee",
        de: "/archiv/convertee",
    },
    project_convertee_page_title: {
        en: "University Course Directory - Portfolio: Sebastian Schuler",
        de: "Studienverzeichnis - Portfolio: Sebastian Schuler",
    },
    project_convertee_title: {
        en: "Convertee - Convert Anything",
        de: "Convertee - Alles konvertieren",
    },
    project_convertee_desc: {
        en: `A compact and user-friendly conversion app for Android systems. Easily convert a large number of units, including currencies.`,
        de: `Eine kompakte und benutzerfreundliche Konvertierungsapp für Android Systeme. Einfaches Konvertieren einer großen Anzahl von Einheiten, inklusive Währungen.`,
    },
    project_convertee_section_introduction_p1: {
        en: `Convertee was a spur-of-the-moment idea, as I couldn't find a good and at the same time free conversion app. The biggest problems were either
        a very poor user experience, too much monetisation, or inaccurate conversion.`,
        de: `Convertee war eine spontane Idee, da ich keine gute und gleichzeitig kostenlose Konvertierungsapp finden konnte. Die größten Probleme waren entweder
        sehr schlechte User Experience, zu starke Monetarisierung oder ungenaue Konvertierung.`,
    },
    project_convertee_section_technology_heading: {
        en: "Technology",
        de: "Technologie",
    },
    project_convertee_section_technology_p1: {
        en: `The whole thing is programmed in native Android / Java and thus has the best possible performance. Particularly noteworthy is the choice of BigInteger and BigDecimal 
        as data types to get the most accurate results possible. By using generic classes for conversion, the app is very easy to extend. Simply explained,
        I use three different types of classes as converters: the simplest is multiplication with the appropriate growth values (e.g. 1000 for metres to kilometres ),
        then the conversion using a mathematical formula (e.g. Celsius to Kelvin), and lastly the special ones like shoe sizes which have their own internal 
        implementation.`,
        de: `Programmiert ist das ganze in Nativem Android / Java und hat somit die bestmögliche Performance. Nennenswert ist vor allem die Wahl von BigInteger und BigDecimal 
        als Datentypen, um möglichst genaue Ergebnisse zu bekommen. Durch die Nutzung generischer Klassen zum Konvertieren ist die App sehr einfach Erweiterbar. Einfach erklärt
        benutze ich drei verschiedene Klassenarten als Konvertierer: die einfachste ist die Multiplizierung mit den passenden Wachstumswerten (Bsp. 1000 für Meter zu Kilometer ),
        danach die Konvertierung mithilfe einer mathematischen Formel (Bsp. Celsius zu Kelvin) und als letztes die speziellen wie Schuhgrößen die eine eigene innere 
        Implementierung besitzen.`,
    },

    // ============================== PROJECT PORTFOLIO HOMEPAGE ==============================

    project_portfolio_internal_link: {
        en: "/archive/portfolio-homepage",
        de: "/archiv/portfolio-homepage",
    },
    project_portfolio_page_title: {
        en: "Portfolio Homepage - Portfolio: Sebastian Schuler",
        de: "Portfolio Webseite - Portfolio: Sebastian Schuler",
    },
    project_portfolio_title: {
        en: "Portfolio Homepage",
        de: "Portfolio Webseite",
    },
    project_portfolio_desc: {
        en: ``,
        de: ``,
    },

    // x_min_remaining: (min:number) => ({
    //     de: `Es sind noch ${sec} Minuten verbleibend`,
    //     en: `There are ${min} minutes remaining`
    // }) as const,
    // from_x_to_y: (x:number, y:number) => ({
    //     de: `Von ${x} bis ${y}`,
    //     en: `From ${x} to ${y}`
    // }) as const

} as const;

// Store into global variable so the translations are generated only once when app the app starts
const locales = {
    en: convertStrings(LOCALE_DATA, "en"),
    de: convertStrings(LOCALE_DATA, "de"),
};

// React hook which returns a translation object
// Usage: 
// 1. Declare translation object
// > const T = useTranslation()
// 2. Use in render function
// > return (<div>{T.title}</div>);
export function useTranslation() {

    let { locale } = useRouter();;
    const lang = locale;

    if (lang == "en") return locales.en;
    if (lang == "de") return locales.de;

    return locales.en;
}