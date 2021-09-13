import React from 'react';
import { useState } from 'react';

function Dice(props) {
  let dice1to6 = [
    '/img/dice-empty.png',
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
  ];
  let [diceImage, setDiceImage] = useState(dice1to6[0]);

  const changeDice = () => {
    setDiceImage(dice1to6[0]);
    setTimeout(function () {
      setDiceImage(dice1to6[Math.floor(Math.random() * 6) + 1]);
    }, 1000);
  };

  return (
    <div>
      <img src={diceImage} width="200" onClick={changeDice} />
    </div>
  );
}

export default Dice;
