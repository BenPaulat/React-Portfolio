import React from 'react';

function Resume() {
    return (
        <section>
            <div>
                <h3>Front-End Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS/Bootstrap</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div>
                <h3>Back-End Skills</h3>
                <ul>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>APIs/GraphQL</li>
                    <li>MySQL, MongoDB/NoSQL</li>
                </ul>
            </div>
            <div>
                <h3>Link to full Resume</h3>
                <a target='_blank' href='../../src/assets/resume/BP-Resume-2.pdf'>Resume Link</a>
            </div>
        </section>
    );
}

export default Resume;