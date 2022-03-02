import React from 'react';
import { useForm } from 'react-hook-form';
import MainModal from './MainModal';
import Field from './Field';
import { Wrapper, Title, Line, InputSubmit, InputErrorMessage } from './styles';
import { emailRegexp } from '../../../../utils/regexps';
import { unvalidUserEmail } from '../../Notifications';
import { useDispatch } from 'react-redux';
import { fetchCreateTask } from '../../../../pages/KanbanPage/redux/actions';

const CreateTask = ({ active, setActive, boardId, users, statusId }) => {
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
    if (!users.some((user) => user.email === data.assignedTo)) {
      unvalidUserEmail(data.assignedTo);
    } else {
      data.assignedTo = users.find((user) => user.email === data.assignedTo)._id;
      data.boardId = boardId;
      data.statusId = statusId;
      dispatch(fetchCreateTask(data));
      setActive(false);
      reset();
    }
  };

  const onClose = () => {
    setActive(false);
    reset();
  };

  return (
    <MainModal onClose={onClose} active={active} setActive={setActive}>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Create new task</Title>
        <Line />
        <Field
          refs={register('name', {
            required: '⚠ Required field',
            maxLength: { value: 128, message: '⚠ Maximum length 128 symbols' },
          })}
          title={'Task name*'}
          type={'text'}
          placeholder="Name"
        />
        {errors?.name && <InputErrorMessage>{errors?.name?.message || 'Error!'}</InputErrorMessage>}
        <Field
          refs={register('description', {
            maxLength: { value: 1024, message: '⚠ Maximum length 1024 symbols' },
          })}
          title={'Task description'}
          type={'textarea'}
          placeholder="Description"
        />
        {errors?.description && (
          <InputErrorMessage>{errors?.description?.message || 'Error!'}</InputErrorMessage>
        )}
        <Field
          refs={register('assignedTo', {
            required: '⚠ Required field',
            maxLength: {
              value: 128,
              message: '⚠ Maximum length 128 symbols',
            },
            pattern: {
              value: emailRegexp,
              message: '⚠ Enter correct email',
            },
          })}
          title={'Assigned*'}
          type={'email'}
          placeholder="DanielRadcliffe@mail.com"
        />
        {errors?.assignedTo && (
          <InputErrorMessage>{errors?.assignedTo?.message || 'Error!'}</InputErrorMessage>
        )}

        <InputSubmit value="Create" type="submit" disabled={!isValid} />
      </Wrapper>
    </MainModal>
  );
};

export default CreateTask;
