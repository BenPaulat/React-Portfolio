import React from 'react';

function Nav(props) {
    const { 
        pages = [],
        setCurrentPage,
        currentPage } = props

    return (
        <nav>
            <ul>
                {pages.map((Page) => (
                    <li className={`${currentPage.name === Page.name}`} key={Page.name}>
                       <span onClick={() => setCurrentPage(Page)}>{Page.name}</span> 
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;