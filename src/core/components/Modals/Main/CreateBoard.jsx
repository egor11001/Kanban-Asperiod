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
import { fetchCreateBoard } from '../../../../pages/BoardsPage/redux/actions';
import { boardColors } from '../../../../shared/colors';

const CreateBoard = ({ active, setActive, projectId, user }) => {
  const [color, setColor] = useState(boardColors[0]);
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.projectId = projectId;
    data.color = color;
    data.boardIds = user.boardIds;
    data.userId = user.id;
    dispatch(fetchCreateBoard(data));
    setActive(false);
    reset();
  };

  const onClose = () => {
    setActive(false);
    reset();
  };

  const onColor = (value) => () => {
    setColor(value);
  };
  useEffect(() => {
    if (!active) {
      setColor(boardColors[0]);
    }
  }, [active]);
  return (
    <MainModal onClose={onClose} active={active} setActive={setActive}>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Create new board</Title>
        <Line />
        <Field
          refs={register('name', {
            required: '⚠ Required field',
            maxLength: {
              value: 128,
              message: '⚠ Maximum length 128 symbols',
            },
          })}
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

        <InputSubmit value="Create" type="submit" disabled={!isValid} />
      </Wrapper>
    </MainModal>
  );
};

export default CreateBoard;
