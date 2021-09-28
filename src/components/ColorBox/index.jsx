import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {

};

function getRandomColor() {
    const colorList = ['deeppink', 'green', 'yellow', 'red', 'orange', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return colorList[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'blue';
        console.log(initColor);
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box-color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;