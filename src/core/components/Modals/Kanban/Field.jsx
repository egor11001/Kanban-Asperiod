import React from 'react';
import { Input, SelectInput, SubTitle, TextArea } from './styles';
import { MenuItem } from '@mui/material';

const Field = (props) => {
  switch (props.type) {
    case 'textarea':
      return (
        <div>
          <SubTitle>{props.title}</SubTitle>
          <TextArea maxLength={1025} placeholder={props.placeholder} {...props.refs} />
        </div>
      );

    case 'select':
      return (
        <div>
          {props.statuses && (
            <div>
              <SubTitle>{props.title}</SubTitle>
              <SelectInput {...props.field}>
                {props.statuses.map((status) => (
                  <MenuItem key={status._id} value={status._id}>
                    {status.name}
                  </MenuItem>
                ))}
              </SelectInput>
            </div>
          )}
        </div>
      );

    default:
      return (
        <div>
          <SubTitle>{props.title}</SubTitle>
          <Input
            maxLength={129}
            type={props.type}
            placeholder={props.placeholder}
            {...props.refs}
          />
        </div>
      );
  }
};

export default Field;
