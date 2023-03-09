import React, { useEffect } from 'react';

function InfoPopup({ name, isOpen, onClose, children }) {
  useEffect(() => {
    const handleEvents = (e) => {
      if (
        e.key === 'Escape' ||
        e.key === 'Enter' ||
        e.target.classList.contains('popup_opened')
      )
        onClose();
    };
    if (!isOpen) {
      document.removeEventListener('keydown' || 'click', handleEvents());
      return;
    }
    document.addEventListener('keydown' || 'click', (e) => handleEvents(e));
  }, [isOpen, onClose]);

  return (
    <div
      className={`popup popup__container-${name} ${isOpen ? 'popup_open' : ''}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
}
export default InfoPopup;
