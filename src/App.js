import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      
      <Footer />
    </div>
  );
}

export default App;
