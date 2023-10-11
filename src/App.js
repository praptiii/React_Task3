import React, { useState } from 'react';
import './App.css';

const ColorPicker = () => {
  const colors = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ff8000',
    '#8000ff',
    '#00ffff',
    '#ffff00',
    '#ff0080',
    '#0080ff',
    '#80ff00',
    '#ff00ff',
    '#008080',
    '#808000',
    '#800080',
    '#ff80ff',
    '#80ffff',
    '#ffff80',
    '#800000',
    '#008000',
    '#000080',
  ];
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const [innerBoxColor, setInnerBoxColor] = useState('');

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
    setInnerBoxColor(color);
  };

  return (
    <div className="color-picker-container">
      <div className="color-picker-box">
        <button className="color-picker-button" onClick={handleButtonClick}>
          Pick a color
        </button>
        {showColors && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <div className="selected-color-box" style={{ backgroundColor: innerBoxColor }}>
            <p className="selected-color">You picked: {selectedColor}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
