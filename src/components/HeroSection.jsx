import React from 'react';
import roImage from '../assets/ro.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Sejam bem-vindos!</h1>
      <div className="ro">
        <img src={roImage} alt="Imagem do Rodrigo" loading="lazy" />
      </div>
      <h2>Acompanhem nosso feed!</h2>
    </section>
  );
};

export default HeroSection;

