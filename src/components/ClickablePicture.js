import React from 'react';
import { useState } from 'react';

function ClickablePicture(props) {
  console.log(props);
  let [guyImage, setGuyImage] = useState(props.img);

  const changeImage = () => {
    if (guyImage === props.img) {
      setGuyImage(props.imgClicked);
    } else {
      setGuyImage(props.img);
    }
  };

  return (
    <div>
      <img src={guyImage} onClick={changeImage} />
    </div>
  );
}

export default ClickablePicture;
