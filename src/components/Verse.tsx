import React from 'react';

type VerseProps = {
  scripture: string;
}

const Verse: React.FC<VerseProps> = ({ scripture }) => {
  return (
    <div className='verse'>
      <p className='series-title'>Sold Out</p>
      <p className='title'>Matthew 16:24-26</p>
      <p>{scripture}</p>
    </div>
  );
};

export default Verse;
