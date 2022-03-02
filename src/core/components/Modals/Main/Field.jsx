import React from 'react';
import { Input, SubTitle } from './styles';

const Field = (props) => {
  return (
    <div>
      <SubTitle>{props.title}</SubTitle>
      <Input
        maxLength={props.maxLength || 129}
        type={props.type}
        placeholder={props.placeholder}
        {...props.refs}
      />
    </div>
  );
};

export default Field;
