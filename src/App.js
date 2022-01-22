import React, { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import Page from './components/Page';

function App() {
  const [pages] = useState([
    {
      name: "About Me"
    },
    {
      name: "Project"
    },
    {
      name: "Contact Me"
    },
    {
      name: "Resume"
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div className="App">
      <Nav 
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
      </Nav>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
