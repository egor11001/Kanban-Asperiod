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
  LabelEmail,
  LabelPassword,
} from '../AuthStyles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogin, fetchAuthFailure } from '../../../../pages/AuthPage/redux/actions';
import * as regexps from '../../../../utils/regexps';

const Login = () => {
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
    dispatch(fetchLogin(data));
    reset();
  };

  return (
    <div>
      {error ? setError() : null}
      {isAuth && <Redirect to="/" />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <WrapperAuth>
          <Title>Login</Title>
          <Link css={LinkStyle} to="/authentication/signup">
            Sign up
          </Link>
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
              <InputErrorMessage>{errors?.email?.message || 'Error!'}</InputErrorMessage>
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
              <InputErrorMessage>{errors?.password?.message || 'Error!'}</InputErrorMessage>
            )}
          </InputContainer>
          <InputSubmit value="Login" type="submit" disabled={!isValid} />
        </WrapperAuth>
      </form>
    </div>
  );
};

export default Login;
