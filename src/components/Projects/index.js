import React, { useState } from 'react';
import { Col, Container, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function Projects() {
    const [projectList] = useState([
        {
            name:'Calculator',
            github:'https://github.com/BenPaulat/personal-calculator-project',
            deployment:'https://benpaulat.github.io/personal-calculator-project/',
            description:'A simple, fully functional, personal calculator.',
            image:'CalculatorScreenshot.png'
        },
        {
            name:'Tennant',
            github:'https://github.com/gunther123/Tennant',
            deployment:'https://tennant-webapp-2.herokuapp.com/',
            description:'A professional time tracking tool for a small business.',
            image:'TennantScreenshot.png'
        },
        {
            name:'Munchies & Movies',
            github:'https://github.com/Ahmed-Sajjad111/Munchies-and-Movies',
            deployment:'https://ahmed-sajjad111.github.io/Munchies-and-Movies/',
            description:'A fun, stylized, web-application for searching movies and restaurants.',
            image:'M&MScreenshot.png'
        }
    ])

    /*
    PROJECTS TEMPLATE
    {
        name:'',
        github:'',
        deployment:'',
        description:'',
        image:''
    }
    */
    return (
        <div>
            <Container>
                <Row>
                    {projectList.map((project) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img 
                                variant="top" 
                                src={`../../src/assets/${project.image}`}
                                alt={project.name}
                                key={project.name}
                            />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                            <ListGroup className='list-group-flush'>
                                <ListGroupItem>
                                    <Card.Link key={project.name} href={project.github}>Github</Card.Link>
                                    <Card.Link href={project.deployment}>Live Deployment</Card.Link>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Projects;