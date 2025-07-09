import React from 'react';

const Header = () => {
  return (
    <header>
      <nav role="navigation" className="navbar">
        <a className="home" href="#" title="Voltar para a página inicial">Home</a>
        <div className="dropdown"> 
          <a title="Ir para a página Games" className="dropbtn">Games</a> 
          <div className="dropdown-content"> 
            <a title="Games Menu">Games:</a>
            <a href="#" title="Ir para o jogo 1">"Musical Memory Game"</a>
          </div> 
        </div>
    
        <div className="dropdown"> 
          <a href="#" title="Ir para a página Vídeos" className="dropbtn">Atividades</a>
          <div className="dropdown-content"> 
            <a title="Atividades">Atividades:</a>
            <a href="#" title="Ir para o vídeo 2">"Em Breve"</a>
            <a href="#" title="Ir para o vídeo 3">"Em Breve"</a>
          </div>
        </div>
    
        <a className="float-right" href="#feedback">Feedback</a>
      </nav>
    </header>
  );
};

export default Header;

