import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { isAuth } = useSelector((store) => store.auth);

  if (!isAuth) {
    return <Redirect to="/authentication" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
