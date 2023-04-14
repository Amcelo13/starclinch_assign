import React from 'react';

const Dot = React.memo(({ active, onClick }) => {
  return (
    <span
      className={`dot ${active ? 'active' : ''}`}
      onClick={onClick}
    />
  );
});

export default Dot;
