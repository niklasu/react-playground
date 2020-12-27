import {useEffect, useRef, useState} from "react";

export const Snake = function Snake() {
  const canvasRef = useRef(null);
  const INITIAL_X = 200;
  const [x, setX] = useState(INITIAL_X);
  const [y, setY] = useState(INITIAL_X);
  const [currentDirection, setCurrentDirection] = useState('ArrowLeft');

  const [path, setPath] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')

    function clear(erem) {
      console.log(`removing ${erem}`)
      //ctx.clearRect(erem[0]-10, erem[1]-10, 20, 20);
      ctx.fillStyle = "#FF0000";
      ctx.beginPath()
      //ctx.fillRect(erem[0]-1, erem[1]-1, 10, 2);
      ctx.clearRect(erem[0]-1, erem[1]-1, 10, 10);
    }

    let p = path;
    const pLength = p.length;
    if (pLength < 20) {
      p[pLength] = [x, y];
    } else {
      clear(p.shift())
      p = [...p, [x,y]]
    }
    setPath(p)
    //console.log(path);



    ctx.lineWidth = 2;
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
