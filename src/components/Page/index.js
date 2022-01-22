import React from "react";
import AboutMe from "../About"
import ContactMe from "../Contact";
import Projects from "../Projects";
import Resume from "../Resume";
import PageContent from "../PageContent";

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case "About Me":
                return <AboutMe />
            case "Contact Me":
                return <ContactMe />
            case "Projects":
                return <Projects />
            case "Resume":
                return <Resume />
            default:
                return <AboutMe />
        }
    }
    return (
        <div>
            <h2>{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </div>
    )
}

export default Page;