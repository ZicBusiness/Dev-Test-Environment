import React from 'react';

const VideoContainer = () => {
  return (
    <div id="video-container" className="video-container">
      <iframe 
        src="https://drive.google.com/file/d/1Zr18faIb2qWwkGHeW_EREjKhWICGBoU9/preview" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay"
        title="Vídeo de boas-vindas"
      />
    </div>
  );
};

export default VideoContainer;

