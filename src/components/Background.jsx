import React from 'react';
import tiwiImage from '../assets/tiwi1.png';

const Background = () => {
  return (
    <section>
      <div className="background"> 
        <div className="bgcircle"></div>
        <div className="bgcircle2"></div>
        <div className="bgcircle3"></div>
        <div className="minirobg">
          <img src={tiwiImage} alt="Imagem do golfinho" loading="lazy" />
        </div>
        <div className="front-name">
          <h1>Rodrigo</h1>
        </div>
      </div>
    </section>    
  );    
};

export default Background;

