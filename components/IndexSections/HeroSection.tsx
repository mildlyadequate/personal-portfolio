import StyledScrollButton from "../StyledScrollButton";
import ReactTypingEffect from "react-typing-effect";
import React from 'react';
import { useTranslation } from "../../hooks/useTranslation";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useRouter } from "next/router";
import Link from "next/link";

const HeroSection = React.memo(() => {

    const { width } = useWindowDimensions();
    const { locale } = useRouter();
    let T = useTranslation();

    let getLanguageSelectLink = () => {
        if (locale == "en") return "de";
        if (locale == "de") return "en";
        return "en";
    }

    let getLanguageSelectText = () => {
        if (locale == "en") return "Deutsch";
        if (locale == "de") return "English";
        return ""
    }

    const typingContent = [T.hero_typing_1, T.hero_typing_2, T.hero_typing_3, T.hero_typing_4];

    return (

        <div style={{ height: "calc(100vh - 71px)" }} className="py-5 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-screen-lg items-start justify-center flex flex-col">
            <p className="font-mono text-themeAccent font-normal text-xl mb-5">{T.hero_top_line}</p>
            <h1 className="text-white leading-none text-clampTitle mb-3 font-bold ml-[-2px]">Sebastian Schuler</h1>
            <span className="text-white leading-none text-clampSubtitle mb-3 font-bold">
                {T.hero_typing_before}
                {width && (width <= 480 ? <br /> : <></>)}
                <ReactTypingEffect
                    className="font-bold text-themeAccent"
                    text={typingContent}
                    typingDelay={700}
                    eraseDelay={1200}
                    eraseSpeed={100}
                    speed={250}
                />
            </span>
            <p className="text-lg text-themeMild">{T.hero_description}</p>

            <StyledScrollButton className="mt-8" to="about" text={T.hero_button_read_more} altText={T.hero_button_read_more_alt} />

            <p className="text-themeMild pt-8 ">
                {T.hero_language_switch_before}
                <Link href={'/'} locale={getLanguageSelectLink()}>
                    <a title={T.hero_language_switch_alt} className="text-white hover:text-themeAccent hover:underline">
                        {getLanguageSelectText()}
                    </a>
                </Link>
            </p>
        </div>
    );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
