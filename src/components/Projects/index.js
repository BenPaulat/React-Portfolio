import React, { useState } from 'react';
import { Col, Container, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function Projects() {
    const [projectList] = useState([
        {
            name:'Calculator',
            github:'https://github.com/BenPaulat/personal-calculator-project',
            deployment:'https://benpaulat.github.io/personal-calculator-project/',
            description:'A simple, fully functional, personal calculator.',
            image:'CalculatorScreenshot.PNG'
        },
        {
            name:'Tennant',
            github:'https://github.com/gunther123/Tennant',
            deployment:'https://tennant-webapp-2.herokuapp.com/',
            description:'A professional time tracking tool for a small business.',
            image:'TennantScreenshot.PNG'
        },
        {
            name:'Munchies & Movies',
            github:'https://github.com/Ahmed-Sajjad111/Munchies-and-Movies',
            deployment:'https://ahmed-sajjad111.github.io/Munchies-and-Movies/',
            description:'A fun, stylized, web-application for searching movies and restaurants.',
            image:'M&MScrenshot.PNG'
        },
        {
            name:'Employee Database',
            github:'https://github.com/BenPaulat/Employee-Database',
            deployment:'_blank',
            description:'A command line program to manage a small employee database.',
            image:'EmployeeDBScreenshot.png'
        },
        {
            name:'Budget Tracker',
            github:'https://github.com/BenPaulat/budget-tracker',
            deployment:'https://pacific-shore-79406.herokuapp.com/',
            description:'A simple budget tracking app that works on the go!',
            image:'BudgetTracker.PNG'
        },
        {
            name:'Workday Scheduler',
            github:'https://github.com/BenPaulat/day-planner',
            deployment:'https://benpaulat.github.io/day-planner/',
            description:'A simple calender app for scheduling your work day.',
            image:'WorkdayScheduler.PNG'
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
                        <Card key={project.name} style={{ width: '18rem' }}>
                            <Card.Img 
                                variant="top" 
                                src={require(`../../assets/project-screenshots/${project.image}`)}
                                alt={project.name}
                                className='card-image'
                            />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                            <ListGroup className='list-group-flush'>
                                <ListGroupItem>
                                    <Card.Link href={project.github}>Github</Card.Link>
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