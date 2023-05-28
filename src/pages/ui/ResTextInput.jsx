import React from 'react';
import TextInput from './TextInput';

function ResTextInput(props) {
  const { onChange, value } = props;

  return (
    <TextInput
      type="text"
      onChange={onChange} // Use the onChange prop here
      value={value} // Use the value prop here
    />
  );
}

export default ResTextInput;
