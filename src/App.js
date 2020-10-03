import React from 'react';
import ProjectContextProvider from './contexts/ProjectContextProvider'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import ProjectList from './components/Projects/ProjectList'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Blog from './components/Blog'

function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
        <Navbar />
        <Introduction />
        <ProjectList />
        <AboutMe />
        <Blog />
        <Footer />
      </ProjectContextProvider>
    </div>
  );
}

export default App;
