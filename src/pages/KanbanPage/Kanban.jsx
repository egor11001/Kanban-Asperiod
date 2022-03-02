import Layout from '../../core/components/Layout/Layout';
import {
  Head,
  MainArea,
  Columns,
  TaskButton,
  Task,
  BoardTitle,
  CreateBtn,
  Content,
  TaskArea,
  ButtonMenu,
  TaskText,
  CreationDate,
  PlusIcon,
  Title,
} from '../../core/components/Kanban/KanbanStyles';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, fetchUpdateTask, fetchUsers } from './redux/actions';
import { fetchStatuses } from './redux/StatusesActions';
import CreateStatus from '../../core/components/Modals/Main/CreateStatuse';
import CreateTask from '../../core/components/Modals/Kanban/CreateTask';
import EditTask from '../../core/components/Modals/Kanban/EditTask';
import { useParams } from 'react-router';
import { MenuIcon } from '../../shared/icons';

const KanbanPage = () => {
  const dispatch = useDispatch();
  const [nameOfBoard, setNameOfBoard] = useState(null);
  const [createModalActive, setCreateModalActive] = useState(false);
  const [editTaskModalActive, setEditTaskModalActive] = useState(false);
  const [info, setInfo] = useState({});
  const state = useSelector((state) => state.boards);
  const { statuses } = useSelector((state) => state.statuses);
  const { tasks, users } = useSelector((state) => state.tasks);

  const onCreate = () => {
    setCreateModalActive(true);
  };

  const onEdit = (task) => () => {
    setInfo(task);
    setEditTaskModalActive(true);
  };

  const [createTaskModalTaskActive, setCreateTaskModalActive] = useState(false);

  const onTaskCreate = () => {
    setCreateTaskModalActive(true);
  };
  let params = useParams();
  const boardId = params.id;
  const [currentTask, setCurrentTask] = useState(null);
  const [currentColumn, setCurrentColumn] = useState(null);

  useEffect(() => {
    if (state && state.boards)
      for (let Board in state.boards)
        if (state.boards[Board]._id === boardId) {
          setNameOfBoard(state.boards[Board].name);
        }
    dispatch(fetchStatuses(boardId));
    dispatch(fetchTasks(boardId));
    dispatch(fetchUsers());
  }, [dispatch, boardId, state]);

  function dragStartHandler(e, board, task) {
    setCurrentTask(task);
  }
  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === 'item') {
      e.target.style.boxShadow = '0 2px 3px gray';
    }
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none';
  }
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dropCardHandler(e, board) {
    let data = currentTask;
    data.statusId = board._id;
    dispatch(fetchUpdateTask(data));
  }

  function Create(id) {
    onTaskCreate();
    setCurrentColumn(id);
  }

  return (
    <Layout>
      <MainArea>
        <Head>
          <Title>{nameOfBoard}</Title>
          <CreateBtn onClick={onCreate}>Create status</CreateBtn>
        </Head>
        <Content>
          {statuses &&
            statuses
              ?.filter((status) => status.boardIds.includes(boardId))
              .map((board, index) => (
                <Columns
                  key={index}
                  className="board"
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => dropCardHandler(e, board)}>
                  <BoardTitle>
                    {board?.name}
                    <ButtonMenu>
                      <MenuIcon />
                    </ButtonMenu>
                  </BoardTitle>
                  <TaskArea>
                    {tasks &&
                      tasks
                        ?.filter((task) => task.statusId?.includes(board._id))
                        .map((task) => (
                          <Task
                            key={task._id}
                            onDragStart={(e) => dragStartHandler(e, board, task)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onClick={onEdit(task)}
                            draggable={true}
                            className="task">
                            <TaskText>{task.name}</TaskText>
                            <CreationDate>
                              creation date: {task.createdAt.substr(0, 10)}
                            </CreationDate>
                          </Task>
                        ))}
                  </TaskArea>
                  <TaskButton onClick={() => Create(board._id)}>
                    <PlusIcon />
                    Create Task
                  </TaskButton>
                </Columns>
              ))}
        </Content>

        <CreateStatus
          boardIds={boardId}
          active={createModalActive}
          setActive={setCreateModalActive}
        />
        <CreateTask
          boardId={boardId}
          users={users}
          statusId={currentColumn}
          active={createTaskModalTaskActive}
          setActive={setCreateTaskModalActive}
        />
        <EditTask
          info={info}
          users={users}
          active={editTaskModalActive}
          setActive={setEditTaskModalActive}
          boardId={boardId}
          statuses={statuses}
        />
      </MainArea>
    </Layout>
  );
};

export default KanbanPage;
