import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import BoardsPage from '../pages/BoardsPage/BoardsPage';
import ErrorPage from '../pages/404/ErrorPage';
import ProtectedRoute from './ProtectedRouter';
import KanbanPage from '../pages/KanbanPage/Kanban';

const Routes = () => (
  <Switch>
    <Route exact path="/authentication">
      <Redirect to="/authentication/login" />
    </Route>
    <Route exact path="/authentication/login" component={AuthPage} />
    <Route exact path="/authentication/signup" component={AuthPage} />
    <ProtectedRoute path="/settings" component={SettingsPage} />
    <ProtectedRoute path="/kanban/:id" component={KanbanPage} />
    <ProtectedRoute path="/project/:id" component={BoardsPage} />
    <ProtectedRoute exact path="/" component={MainPage} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Routes;
