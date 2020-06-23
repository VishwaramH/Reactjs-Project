import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Cta from './components/cta';
import Services from './components/services';
import Footer from './components/footer';
import Clients from './components/clients';

class App extends React.Component {
  render() {
  return (
    <>
    <Header />
    <Hero />
    <Clients />
    <About />
    <Cta />
    <Services />
    <Footer />
  </>
  )
}
}

export default App;
