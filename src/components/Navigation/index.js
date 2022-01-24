import React from 'react';
import { Col, Container, Navbar, Row, Nav } from 'react-bootstrap';

function Navigation(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    // const highlightText = (eventKey) => { 
    //     var navEl = document.getElementById('nav');
    //     if (navEl.classList == "highlighted") {
    //         navEl.classList.remove("highlighted")
    //     } else {
    //         navEl.classList.add("highlighted")
    //     }
    // }

    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand bsPrefix="nav-header" >
                        Benjamin Paulat
                    </Navbar.Brand>
                    {/* add onSelect={highlightText} to hightlight */}
                    <Nav className='justify-content-md-center'>
                        {pages.map((page) => (
                            <Nav.Link id="nav" eventKey="1" bsPrefix="cursor-p mx-2 nav-l"className={`${currentPage.name === page.name}`} key={page.name}>
                                <span onClick={() => { console.log(page); setCurrentPage(page); }}>{page.name}</span>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Navigation;