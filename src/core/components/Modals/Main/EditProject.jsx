import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchUpdateProject } from '../../../../pages/MainPage/redux/actions';
import MainModal from './MainModal';
import Field from './Field';
import { Wrapper, Title, Line, InputSubmit, InputErrorMessage } from './styles';
import { noChangesNotification } from '../../Notifications';

const EditProject = ({ active, setActive, info }) => {
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
    if (data.name === info.name && data.description === info.description) {
      noChangesNotification();
    } else {
      data.id = info.id;
      dispatch(fetchUpdateProject(data));
      reset();
      setActive(false);
    }
  };

  const onClose = () => {
    setActive(false);
    reset();
  };

  useEffect(() => {
    reset({ name: info.name, description: info.description });
  }, [info, reset]);

  return (
    <MainModal onClose={onClose} active={active} setActive={setActive}>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Edit {info.name}</Title>
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
          maxLength={1025}
        />

        {errors?.description && (
          <InputErrorMessage>{errors?.description?.message || 'Error!'}</InputErrorMessage>
        )}

        <InputSubmit value="Edit" type="submit" disabled={!isValid} />
      </Wrapper>
    </MainModal>
  );
};

export default EditProject;
