/** @jsxImportSource @emotion/core */
import React from 'react';
import Signup from '../../core/components/Auth/Signup';
import Login from '../../core/components/Auth/Login';
import { Route } from 'react-router-dom';
import { Inner, Wrapper, Images } from './styles';
import logo from '../../shared/icons/logo.svg';

const AuthPage = () => (
  <Wrapper>
    <Inner>
      <Images src={logo} />
      <Route path="/authentication/signup" component={Signup} />
      <Route path="/authentication/login" component={Login} />
    </Inner>
  </Wrapper>
);

export default AuthPage;
