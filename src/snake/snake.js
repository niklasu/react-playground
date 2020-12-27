import {useEffect, useRef, useState} from "react";

export const Snake = function Snake() {
  const canvasRef = useRef(null);
  const [x, setX] = useState(200);
  const [y, setY] = useState(200);
  const [currentDirection, setCurrentDirection] = useState('ArrowLeft');

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.moveTo(x, y);
    if (currentDirection === 'ArrowLeft') {
      ctx.lineTo(x - 10, y);
    }
    if (currentDirection === 'ArrowRight') {
      ctx.lineTo(x + 10, y);
    }
    if (currentDirection === 'ArrowUp') {
      ctx.lineTo(x, y - 10);
    }
    if (currentDirection === 'ArrowDown') {
      ctx.lineTo(x, y + 10);
    }
    ctx.stroke();
  }, [x, y]);

  setTimeout(() => {
    const number = 10;
    if (currentDirection === 'ArrowLeft') {
      setX(x - number)
    }
    if (currentDirection === 'ArrowRight') {
      setX(x + number)
    }
    if (currentDirection === 'ArrowUp') {
      setY(y - number)
    }
    if (currentDirection === 'ArrowDown') {
      setY(y + number)
    }

  }, 100);

  useEffect(() => {
    document.addEventListener("keydown", e => setCurrentDirection(e.key));
  }, [])

  return <>
    <canvas ref={canvasRef} width="400" height="400"/>
  </>;
}
