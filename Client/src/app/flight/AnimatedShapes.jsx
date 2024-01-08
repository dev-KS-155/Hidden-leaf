"use client"
// AnimatedShapes.js
import React, { useEffect, useRef } from 'react';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = () => `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.6)`;

const AnimatedShapes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createShape = () => {
      const shape = document.createElement('div');
      shape.className = 'animated-shape';

      const size = getRandomInt(20, 40);
      const zIndex = getRandomInt(1, 3);

      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.background = getRandomColor();
      shape.style.zIndex = zIndex;

      container.appendChild(shape);

      const speed = getRandomInt(4, 4);
      const initialRotation = getRandomInt(0, 40);
      let rotation = initialRotation;

      const rotateShape = () => {
        shape.style.transform = `rotate(${rotation}deg)`;
        rotation = 23 - rotation; // Reverse the rotation direction
        shape.style.transition = `transform ${speed}s ease-in-out`;

        // Change color after each rotation
        shape.style.background = getRandomColor();

        // Reset rotation and color for the next cycle
        setTimeout(() => {
          rotateShape();
        }, speed * 1000);
      };

      const moveShape = () => {
        const left = getRandomInt(0, window.innerWidth - size);
        const top = getRandomInt(0, window.innerHeight - size);

        shape.style.left = `${left}px`;
        shape.style.top = `${top}px`;

        const deltaX = getRandomInt(1, 2);
        const deltaY = getRandomInt(1, 2);

        const move = () => {
          shape.style.left = `${parseFloat(shape.style.left) + deltaX}px`;
          shape.style.top = `${parseFloat(shape.style.top) + deltaY}px`;

          if (
            parseFloat(shape.style.left) < window.innerWidth &&
            parseFloat(shape.style.top) < window.innerHeight &&
            parseFloat(shape.style.left) + size > 0 &&
            parseFloat(shape.style.top) + size > 0
          ) {
            requestAnimationFrame(move);
          } else {
            container.removeChild(shape);
            createShape();
          }
        };

        move();
      };

      rotateShape();
      moveShape();
    };

    const numberOfShapes = 5;

    for (let i = 0; i < numberOfShapes; i++) {
      createShape();
    }
  }, []);

  return <div ref={containerRef} className="sticky animated-shapes-container "></div>;
};

export default AnimatedShapes;
