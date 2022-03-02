import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchCreateProject } from '../../../../pages/MainPage/redux/actions';
import MainModal from './MainModal';
import Field from './Field';
import { Wrapper, Title, Line, InputSubmit, InputErrorMessage } from './styles';

const CreateProject = ({ active, setActive, user }) => {
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
    data.projectIds = user.projectIds;
    data.userId = user.id;
    dispatch(fetchCreateProject(data));
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
        <Title>Create new project</Title>
        <Line />
        <Field
          refs={register('name', {
            required: '⚠ Required field',
            maxLength: {
              value: 128,
              message: '⚠ Maximum length 128 symbols',
            },
          })}
          title={'Project name*'}
          type={'text'}
          placeholder="Name"
        />

        {errors?.name && <InputErrorMessage>{errors?.name?.message || 'Error!'}</InputErrorMessage>}
        <Field
          refs={register('description', {
            maxLength: {
              value: 1024,
              message: '⚠ Maximum length 1024 symbols',
            },
          })}
          title={'Project description'}
          type={'text'}
          placeholder="Description"
        />

        {errors?.description && (
          <InputErrorMessage>{errors?.description?.message || 'Error!'}</InputErrorMessage>
        )}

        <InputSubmit value="Create" type="submit" disabled={!isValid} />
      </Wrapper>
    </MainModal>
  );
};

export default CreateProject;
