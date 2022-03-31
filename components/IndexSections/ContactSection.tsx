import React, { FormEvent, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

const ContactSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    let T = useTranslation();

    return (
        <div
            id="contact"
            className="py-24 mx-auto max-w-screen-sm flex flex-col"
        >
            <h2
                className="numbered-section-heading text-white
                  before:font-mono before:text-2xl before:text-themeAccent
                after:bg-gray-500"
            >
                {T.contact_header}
            </h2>

            <div className="flex w-full">

                <form
                    name="contactme"
                    action="?formsuccess=true"
                    method="POST"
                    className={"block w-full md:w-3/4 mr-8"}
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contactme" />
                    <div className="flex flex-col">

                        <label className="hidden" htmlFor="bot-field">Ignore this if you&apos;re human:</label>
                        <input className="hidden" name="bot-field" />

                        <label htmlFor="name" className="text-themeMild mb-1">
                            Name:
                        </label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="rounded focus:outline-none focus:ring-themeAccent focus:ring border-none"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="email" className="text-themeMild mb-1 mt-8">
                            Email:
                        </label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Your.email@example.com"
                            className="rounded focus:outline-none focus:ring-themeAccent focus:ring border-none"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="message" className="text-themeMild mb-1 mt-8">
                            Message:
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your message"
                            className="rounded focus:outline-none focus:ring-themeAccent focus:ring border-none"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-1/2 py-4 mx-auto border-themeAccent border rounded mt-8 text-white hover:text-themeBackground hover:bg-themeAccent transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
