import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import MainModal from './MainModal';
import Field from './Field';
import { Wrapper, Title, Line, InputSubmit, InputErrorMessage } from './styles';
import { fetchCreateStatus } from '../../../../pages/KanbanPage/redux/StatusesActions';

const CreateStatus = ({ active, setActive, boardIds}) => {
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
    data.boardIds = boardIds;
    dispatch(fetchCreateStatus(data));
    setActive(false);
    reset();
  };

  const onClose = () => {
    setActive(false);
    reset();
  };

  return (
    <MainModal onClose={onClose} active={active} setActive={setActive}>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Create status</Title>
        <Line />
        <Field
          refs={register('name', { required: '⚠ Required field' })}
          title={'Status name*'}
          type={'text'}
          placeholder="Name"
        />

        {errors?.name && <InputErrorMessage>{errors?.name?.message || 'Error!'}</InputErrorMessage>}

        <InputSubmit value="Create" type="submit" disabled={!isValid} />
      </Wrapper>
    </MainModal>
  );
};

export default CreateStatus;
