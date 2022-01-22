import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand bsPrefix="nav-header" >
                        Benjamin Paulat
                    </Navbar.Brand>
                    <Row className='justify-content-md-center'>
                        {pages.map((page) => (
                            <Col className={`cursor-p lg=3 ${currentPage.name === page.name}`} key={page.name}>
                                <span onClick={() => { console.log(page); setCurrentPage(page); }}>{page.name}</span>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
}

export default Nav;