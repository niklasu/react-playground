import {useEffect, useRef, useState} from "react";

export const Snake = function Snake() {
  const canvasRef = useRef(null);
  const INITIAL_X = 200;
  const [x, setX] = useState(INITIAL_X);
  const [y, setY] = useState(INITIAL_X);
  const [currentDirection, setCurrentDirection] = useState('ArrowLeft');
  const [gameOver, setGameOver] = useState(false);

  const [path, setPath] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')

    function clear(erem) {
      ctx.beginPath()
      ctx.clearRect(erem[0] - 1, erem[1] - 1, 10, 10);
    }

    let p = path;
    const pLength = p.length;
    if (pLength < 20) {
      p[pLength] = [x, y];
    } else {
      clear(p.shift())
      p = [...p, [x, y]]
    }
    setPath(p)


    ctx.lineWidth = 2;
    ctx.moveTo(x, y);
    let moveTarget = [];
    if (currentDirection === 'ArrowLeft') {
      moveTarget = [x - 10, y]
    }
    if (currentDirection === 'ArrowRight') {
      moveTarget = [x + 10, y]
    }
    if (currentDirection === 'ArrowUp') {
      moveTarget = [x, y - 10]
    }
    if (currentDirection === 'ArrowDown') {
      moveTarget = [x, y + 10]
    }
    ctx.lineTo(moveTarget[0], moveTarget[1])
    ctx.stroke();

    path.forEach(item => {
      if (item[0] === moveTarget[0] && item[1] === moveTarget[1]) {
        setGameOver(true);
      }
    })
  }, [x, y, gameOver]);

  if (!gameOver) {
    setTimeout(() => {
      const number = 10;
      if (currentDirection === 'ArrowLeft') {
        if (x <= 0) {
          setX(400);
        } else {
          setX(x - number);
        }
      }
      if (currentDirection === 'ArrowRight') {
        setX((x + number) % 400);
      }
      if (currentDirection === 'ArrowUp') {
        if (y <= 0) {
          setY(400);
        } else {
          setY(y - number);
        }
      }
      if (currentDirection === 'ArrowDown') {
        setY((y + number) % 400)
      }

    }, 100)
  }

  useEffect(() => {
    document.addEventListener("keydown", e => setCurrentDirection(e.key));
  }, [])

  return <>
    <canvas style={{border: '1px solid black'}} ref={canvasRef} width="400" height="400"/>
  </>;
}
