import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BigImage = ({ src, alt }) => {
  return (
    <Popup
      trigger={
        <img
          src={src}
          alt={alt}
          className='brand-image'
          crossorigin="anonymous"
        />
      }
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div className="displayimage">
          <span className="close-button" onClick={close}>
            &times;
          </span>
          <img crossorigin="anonymous" src={src} alt={alt} style={{ width: '100%' }} />
        </div>
      )}
    </Popup>
  );
};

export default BigImage;
