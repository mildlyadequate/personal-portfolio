// LangType describes an object like {de:string, en:string}
type LangType<Lang extends string> = { [k in Lang]: string }

// LangTypeF is a LangType or a function, which returns a LangType
type LangTypeFn<Lang extends string> = LangType<Lang> | ((...x: any) => LangType<Lang>)

type StringConversion<Lang extends string, S extends Record<any, LangTypeFn<Lang>>> = {
    [x in keyof S]: S[x] extends ((...x: infer ARGS) => { [k in Lang]: infer Res })
    ? (...x: ARGS) => Res
    : S[x] extends Record<Lang, any>
    ? S[x][Lang]
    : never
};

// Generates a translation object for a specific language
export function convertStrings<Lang extends string, S extends Record<any, LangTypeFn<Lang> > > (strings: S, lang: Lang): StringConversion<Lang, S> {

    let res: any = {};

    for (let [key, val] of Object.entries(strings)) {

        if (typeof val === "object") {
            res[key] = val[lang];

        } else if (typeof val === "function") {

            res[key] = (...xs: any[]) => {
                // @ts-ignore
                return val(...xs)[lang]

            }

        } else {
            throw new Error("convertStrings: " + typeof val);
        }

    }
    return res;
}