import React from "react";
import AboutMe from "../components/About";
import ContactMe from "../components/Contact";
import Project from "../components/Project";
import Resume from "../components/Resume";
import PageContent from "../components/PageContent";

function Page(currentPage) {
    const renderPage = () => {
        switch (currentPage.name) {
            case "About Me":
                return <AboutMe />
            case "Contact Me":
                return <ContactMe />
            case "Project":
                return <Project />
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