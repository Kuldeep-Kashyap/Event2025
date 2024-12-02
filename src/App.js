import React from 'react';
import Header from './components/header/Header';
import Banner from './pages/banner/Banner';
import About from './pages/about/About';
import EventSchedule from './pages/eventSchedule/EventSchedule';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <Header />
    <Banner />
    <About />
    <EventSchedule />
    <Footer />
  </>
);

export default App;
