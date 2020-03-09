import React from 'react';
import { useDispatch } from 'react-redux';

function Meme({ top, bottom, img, index }) {
  const dispatch = useDispatch();
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", payload: index });
  };

  return (
    <div className="Meme">
      <img src={img} alt={top} />
      <div className="Meme-TopText">{top}</div>
      <div className="Meme-BottomText">{bottom}</div>
      <button onClick={()=> handleRemove(index)}>X</button>
    </div>
  )

}

export default Meme;