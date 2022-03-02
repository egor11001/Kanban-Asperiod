import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './components/Main';
import Routes from './Routes';
import GlobalStyles from '../shared/GlobalStyles';
import { checkAuth } from '../pages/AuthPage/redux/actions';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Loader from './components/Loader';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoading(true);
      dispatch(checkAuth(setIsLoading));
    }
  }, [dispatch]);
  return (
    <div className="App">
      <GlobalStyles />
      <ReactNotifications />
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <Main>
            <Routes />
          </Main>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
