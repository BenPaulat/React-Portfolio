import React from 'react';
import { Stack } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="fixed-bottom">
            <Stack direction="horizontal" gap={3}>
                <div>
                    <a className='fab fa-github' href='https://github.com/BenPaulat/'></a>
                </div>
                <div>
                    <a className='fab fa-linkedin' href='https://linkedin.com/in/benjamin-paulat-77165a123'></a>
                </div>
                <div>
                    Made with ☕ and ❤ by Benjamin Paulat
                </div>
            </Stack>
        </footer>
        
    );
}

export default Footer;