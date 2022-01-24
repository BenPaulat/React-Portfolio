import React, { useState } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Page from './components/Page';

function App() {
  const [pages] = useState([
    {
      name: "About Me"
    },
    {
      name: "Projects"
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
      <Navigation 
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
      </Navigation>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
