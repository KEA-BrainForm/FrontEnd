import React from 'react';

function ResTextInput(props) {
  const { onChange, value } = props;

  return (
    <input
      type="text"
      onChange={onChange} // Use the onChange prop here
      value={value} // Use the value prop here
    />
  );
}

export default ResTextInput;
