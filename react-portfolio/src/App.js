import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <main>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
