import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import MainModal from './MainModal';
import Field from './Field';
import {
  Wrapper,
  Title,
  Line,
  InputSubmit,
  InputErrorMessage,
  WrapperColors,
  ColorsContainer,
  ColorBox,
  SubTitle,
  CheckBox,
} from './styles';
import { fetchUpdateBoard } from '../../../../pages/BoardsPage/redux/actions';
import { boardColors } from '../../../../shared/colors';
import { noChangesNotification } from '../../Notifications';

const EditBoard = ({ active, setActive, info, projectId }) => {
  const [color, setColor] = useState(info.color);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.color = color;
    if (data.name === info.name && data.color === info.color) {
      noChangesNotification();
    } else {
      data.id = info.id;
      data.projectId = projectId;
      dispatch(fetchUpdateBoard(data));
      reset();
      setActive(false);
    }
  };

  const onClose = () => {
    setActive(false);
    reset();
  };

  const onColor = (value) => () => {
    setColor(value);
  };

  useEffect(() => {
    reset({ name: info.name });
    setColor(info.color);
  }, [info, reset]);

  return (
    <MainModal onClose={onClose} active={active} setActive={setActive}>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Edit {info.name}</Title>
        <Line />
        <Field
          refs={register('name', { required: '⚠ Required field' })}
          title={'Board name*'}
          type={'text'}
          placeholder="Name"
        />

        {errors?.name && <InputErrorMessage>{errors?.name?.message || 'Error!'}</InputErrorMessage>}
        <WrapperColors>
          <SubTitle>Choose board color</SubTitle>
          <ColorsContainer>
            {boardColors.map((item) => (
              <ColorBox key={item} onClick={onColor(item)} boardColor={item}>
                {color === item ? <CheckBox /> : null}
              </ColorBox>
            ))}
          </ColorsContainer>
        </WrapperColors>

        <InputSubmit value="Edit" type="submit" disabled={!isValid} />
      </Wrapper>
    </MainModal>
  );
};

export default EditBoard;
