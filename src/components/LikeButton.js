import { useState } from 'react';

function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let pick = Math.floor(Math.random() * (colors.length - 1));

  let [sum, setSum] = useState(0);
  let [plural, setPlural] = useState('Like');
  const sumLike = () => {
    setSum(++sum);
    if (sum > 1) {
      setPlural('Likes');
    }
  };

  return (
    <button onClick={sumLike} style={{ backgroundColor: colors[pick] }}>
      {sum} {plural}
    </button>
  );
}

export default LikeButton;
