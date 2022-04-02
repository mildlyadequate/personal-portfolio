import { useTranslation } from "./useTranslation";

export type ProjectMeta = {
    featured: boolean,
    year: number,
    title: string,
    desc: string,
    tags: string[],
    linkExternal: string,
    linkGithub: string,
    linkInternal: string,
    image: string | null,
}

export function useProjectData(sortByYear = false) {

    let T = useTranslation();
    const PROJECT_DATA = [

        // Featured = true requires an image to be set
        {
            featured: true,
            year: 2022,
            title: T.project_marketingacademy_title,
            desc: T.project_marketingacademy_desc,
            tags: ["WordPress", "Elementor", "Adobe XD"],
            linkExternal: "",
            linkGithub: "",
            linkInternal: T.project_marketingacademy_internal_link,
            image: "/images/marketing-akademie/marketing-akademie-thumbnail.png",
        },
        {
            featured: false,
            year: 2021,
            title: T.project_studienverzeichnis_title,
            desc: T.project_studienverzeichnis_desc,
            tags: ["WordPress", "Python", "MySQL", "Elementor"],
            linkExternal: "",
            linkGithub: "",
            linkInternal: T.project_studienverzeichnis_internal_link,
            image: "",
        },
        {
            featured: false,
            year: 2021,
            title: T.project_convertee_title,
            desc: T.project_convertee_desc,
            tags: ["Android", "Java", "Material Design"],
            linkExternal: "",
            linkGithub: "https://github.com/mildlyadequate/Convertee",
            linkInternal: T.project_convertee_internal_link,
            image: "",
        },
        {
            featured: false,
            year: 2022,
            title: T.project_portfolio_title,
            desc: T.project_portfolio_desc,
            tags: ["Next", "React", "Tailwind", "Netlify"],
            linkExternal: "https://sebastian-schuler.de",
            linkGithub: "https://github.com/mildlyadequate/personal-portfolio",
            linkInternal: T.project_portfolio_internal_link,
            image: "",
        },
        {
            featured: false,
            year: 2019,
            title: T.project_copsi_title,
            desc: T.project_copsi_desc,
            tags: ["Electron", "Express", "MongoDB","SocketIO"],
            linkExternal: "",
            linkGithub: "https://github.com/mildlyadequate/copsi",
            linkInternal: T.project_copsi_internal_link,
            image: "",
        },
    ];

    if (sortByYear) {
        PROJECT_DATA.sort((a, b) => {
            return b.year - a.year;
        });
    }

    return PROJECT_DATA;
}