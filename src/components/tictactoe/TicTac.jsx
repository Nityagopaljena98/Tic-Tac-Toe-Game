import React, { useRef, useState } from 'react';
import circle_icon from '../../assets/circle.png';
import cross_icon from '../../assets/cross.png';

import './TicTac.css';

let data = ['', '', '', '', '', '', '', '', ''];
const TicTac = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let winTitleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src= '${cross_icon}'>`;
      data[num] = 'x';
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src = '${circle_icon}'>`;
      data[num] = 'o';
      setCount(++count);
    }
    victoryCheck();
  };

  //Check the condition for win
  const victoryCheck = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[0] !== '') {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== '') {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== '') {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== '') {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== '') {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== '') {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== '') {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== '') {
      won(data[2]);
    }
  };

  //Logic for the winner
  const won = (winner) => {
    setLock(true);
    if (winner === 'x') {
      winTitleRef.current.innerHTML = `Congratulations: <img src = ${cross_icon}> <span>Win</span> 🎉 `;
    } else {
      winTitleRef.current.innerHTML = `Congratulations: <img src = ${circle_icon}> <span>Win</span> 🎉`;
    }
  };

  //Reset the game or clear the board
  const restart = () => {
    setLock(false);
    data = ['', '', '', '', '', '', '', '', ''];
    winTitleRef.current.innerHTML = `TIC TAC TOE GAME`;

    // Clear all the boxes on the board
    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach((box) => {
      box.innerHTML = '';
    });
    setCount(0);
  };

  return (
    <>
      <div className='container'>
        <h1 className='title' ref={winTitleRef}>
          TIC TAC TOE GAME{' '}
        </h1>
        <div className='board'>
          <div className='row1'>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className='row2'>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className='row3'>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className='boxes'
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <div className='btn'>
          <button
            className='restart'
            onClick={() => {
              restart();
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
};

export default TicTac;
