import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import MainModal from './MainModal';
import Field from './Field';
import { Wrapper, Title, Line, InputSubmit, InputErrorMessage, DeleteSubmit, Flex } from './styles';
import { emailRegexp } from '../../../../utils/regexps';
import { unvalidUserEmail } from '../../Notifications';
import { useDispatch } from 'react-redux';
import { fetchDeleteTask, fetchUpdateTask } from '../../../../pages/KanbanPage/redux/actions';

const EditTask = ({ active, setActive, info, users, boardId, statuses }) => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid },
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
      data._id = info._id;
      dispatch(fetchUpdateTask(data));
      setActive(false);
      reset();
    }
  };

  const onClose = () => {
    setActive(false);
    reset();
  };

  const onDelete = () => {
    dispatch(fetchDeleteTask({ _id: info._id }));
    setActive(false);
    reset();
  };

  useEffect(() => {
    reset({
      name: info.name,
      description: info.description,
      assignedTo:
        users && info.assignedTo && users.find((user) => user._id === info.assignedTo)?.email,
      statusId: info.statusId,
    });
  }, [info, reset, users]);

  return (
    <MainModal onClose={onClose} active={active} setActive={setActive}>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Edit {info.name}</Title>
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
        <Controller
          control={control}
          name="statusId"
          render={({ field }) => (
            <Field type="select" title={'Status'} statuses={statuses} field={field} />
          )}
          defaultValue={info.statusId ? info.statusId : ''}
        />
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

        <Flex>
          <DeleteSubmit type="button" onClick={onDelete}>
            Delete
          </DeleteSubmit>
          <InputSubmit value="Save changes" type="submit" disabled={!isValid} />
        </Flex>
      </Wrapper>
    </MainModal>
  );
};

export default EditTask;
