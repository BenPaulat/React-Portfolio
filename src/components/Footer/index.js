import React from 'react';

function Footer() {
    return (
        <footer className="fixed-bottom page-footer font-small py-2">
            <div className='footer-container'>
                <div>
                    <a className='btn-fb mx-1' href='https://github.com/BenPaulat/'>
                        Visit My Github
                    </a>
                </div>
                <div>
                    <a className='btn-fb mx-1' href='https://linkedin.com/in/benjamin-paulat-77165a123'>
                        Check Out My LinkedIn
                    </a>
                </div>
                <div>
                    Made with ☕ and ❤ by Benjamin Paulat
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;