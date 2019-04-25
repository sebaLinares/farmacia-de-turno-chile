import React from 'react';

const farmacias = (props) => {
  const style = {
    height: '800px',
    width: '800px',
  }

  return (
    <div style={style}>
      <p onClick={props.farmacias}>Farmacias working!</p>
    </div>
  )
}

export default farmacias;
