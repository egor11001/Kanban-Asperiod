import authApi from './authApi';
import UserApi from './UserApi';
import ProjectsApi from './ProjectsApi';
import BoardsApi from './BoardsApi';
import TasksApi from './TasksApi';
import StatusesApi from './StatusesApi';

const api = {
  auth: authApi,
  user: UserApi,
  projects: ProjectsApi,
  boards: BoardsApi,
  tasks: TasksApi,
  statuses: StatusesApi,
};

export default api;
