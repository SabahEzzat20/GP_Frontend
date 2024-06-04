import React from 'react';
import './Alert.css';

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-container">
      <div className="alert-message">
        <p>{message}</p>
        <button className="alert-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;