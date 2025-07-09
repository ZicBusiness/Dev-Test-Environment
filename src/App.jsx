import React from 'react';
import Header from './components/Header';
import Background from './components/Background';
import VideoContainer from './components/VideoContainer';
import HeroSection from './components/HeroSection';
import VideosSection from './components/VideosSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <VideoContainer />
      <HeroSection />
      <VideosSection />
      <br />
      <Footer />
    </div>
  );
}

export default App;

