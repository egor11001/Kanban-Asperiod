/** @jsxImportSource @emotion/core */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import {
  InputErrorMessage,
  InputContainer,
  Input,
  InputSubmit,
  LinkStyle,
  WrapperAuth,
  Title,
  LabelName,
  LabelEmail,
  LabelPassword,
} from '../AuthStyles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSignup, fetchAuthFailure } from '../../../../pages/AuthPage/redux/actions';
import * as regexps from '../../../../utils/regexps';

const Signup = () => {
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const { error, isAuth } = useSelector((state) => state.auth);
  const setError = () => {
    dispatch(fetchAuthFailure(null));
  };
  const onSubmit = (data) => {
    dispatch(fetchSignup(data));
    reset();
  };
  return (
    <div>
      {error ? setError() : null}
      {isAuth && <Redirect to="/" />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <WrapperAuth>
          <Title>Signup</Title>
          <Link css={LinkStyle} to="/authentication/login">
            Log in
          </Link>
          <InputContainer>
            <div>
              <LabelName htmlFor="userName">Username</LabelName>
              <Input
                id="userName"
                type="text"
                placeholder="Daniel Radcliffe"
                maxLength={129}
                {...register('name', {
                  maxLength: {
                    value: 128,
                    message: '⚠ Maximum length 128 symbols',
                  },
                })}
              />
            </div>
            {errors?.name && (
              <div>
                <InputErrorMessage>{errors?.name?.message || 'Error!'}</InputErrorMessage>
              </div>
            )}
          </InputContainer>
          <InputContainer>
            <div>
              <LabelEmail htmlFor="email">Email*</LabelEmail>
              <Input
                id="email"
                type="text"
                placeholder="DanielRadcliffe@mail.com"
                maxLength={129}
                {...register('email', {
                  required: '⚠ Required field',
                  maxLength: {
                    value: 128,
                    message: '⚠ Maximum length 128 symbols',
                  },
                  pattern: {
                    value: regexps.emailRegexp,
                    message: '⚠ Enter correct email',
                  },
                })}
              />
            </div>
            {errors?.email && (
              <div>
                <InputErrorMessage>{errors?.email?.message || 'Error!'}</InputErrorMessage>
              </div>
            )}
          </InputContainer>
          <InputContainer>
            <div>
              <LabelPassword htmlFor="password">Password*</LabelPassword>
              <Input
                type="password"
                placeholder="12345"
                maxLength={21}
                {...register('password', {
                  required: '⚠ Required field',
                  minLength: {
                    value: 8,
                    message: '⚠ Minimum length 8 symbols',
                  },
                  maxLength: {
                    value: 20,
                    message: '⚠ Maximum length 20 symbols',
                  },
                })}
              />
            </div>
            {errors?.password && (
              <div>
                <InputErrorMessage>{errors?.password?.message || 'Error!'}</InputErrorMessage>
              </div>
            )}
          </InputContainer>
          <InputSubmit value="Signup" type="submit" disabled={!isValid} />
        </WrapperAuth>
      </form>
    </div>
  );
};

export default Signup;
