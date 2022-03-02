import authReducer from '../../pages/AuthPage/redux/reducer';
import CurrentUserReducer from '../../core/redux/UserReducer';
import ProjectsReducer from '../../pages/MainPage/redux/reducer';
import BoardsReducer from '../../pages/BoardsPage/redux/reducer';
import TasksReducer from '../../pages/KanbanPage/redux/reducer';
import StatusesReducer from '../../pages/KanbanPage/redux/StatusesReducer';

export default {
  auth: authReducer,
  user: CurrentUserReducer,
  projects: ProjectsReducer,
  boards: BoardsReducer,
  tasks: TasksReducer,
  statuses: StatusesReducer,
};
