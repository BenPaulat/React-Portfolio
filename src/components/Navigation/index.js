import React from 'react';

function Nav(props) {
    const { 
        pages = [],
        setCurrentPage,
        currentPage 
    } = props;

    return (
        <div>
        <nav>
            <ul className='flex-row'>
                {pages.map((page) => (
                    <li className= {`mx-2 ${currentPage.name === page.name}`} key={page.name}>
                       <span onClick={() => {console.log(page); setCurrentPage(page.name);}}>{page.name}</span> 
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    );
}

export default Nav;