import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Meme from './Meme';

function MemeContainer() {
  const memes = useSelector(st => st.memes);

  return (
    <div className="MemeContainer">
      {memes.map((meme, i) => (<Meme top={meme.top}
        bottom={meme.bottom}
        img={meme.url}
        key={uuid()}
        index={i} />))}
    </div>
  )
}

export default MemeContainer;