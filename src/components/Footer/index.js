import React from 'react';

function Footer() {
    return (
        <footer className="fixed-bottom page-footer font-small py-2">
            <div className='footer-container'>
                <div>
                    <a className='btn-floating btn-fb mx-1' href='https://github.com/BenPaulat/'>
                        <i className="fab fa-github"> </i>
                    </a>
                </div>
                <div>
                    <a className='fab fa-linkedin' href='https://linkedin.com/in/benjamin-paulat-77165a123'></a>
                </div>
                <div>
                    Made with ☕ and ❤ by Benjamin Paulat
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;