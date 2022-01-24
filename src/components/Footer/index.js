import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="fixed-bottom page-footer font-small py-2">
            <Row className='footer-container'>
                <Col>
                    <a className='btn-fb mx-1 link' href='https://github.com/BenPaulat/'>
                        Visit My Github
                    </a>
                </Col>
                <Col>
                    <a className='btn-fb mx-1 link' href='https://linkedin.com/in/benjamin-paulat-77165a123'>
                        Check Out My LinkedIn
                    </a>
                </Col>
                <Col>
                    Made with ☕ and ❤ by Benjamin Paulat
                </Col>
            </Row>
        </footer>
        
    );
}

export default Footer;