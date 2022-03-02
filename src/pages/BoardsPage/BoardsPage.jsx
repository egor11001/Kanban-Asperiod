import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../core/components/Layout/Layout';
import {
  Board,
  MainArea,
  Grid,
  NewBoard,
  Line,
  WrapperBoard,
  ButtonMenu,
  FlexRow,
  ColorBox,
  PlusIcon,
  Title,
} from '../../core/components/AllBoard/styles';
import CreateBoard from '../../core/components/Modals/Main/CreateBoard';
import EditBoard from '../../core/components/Modals/Main/EditBoard';
import DeleteModal from '../../core/components/Modals/Main/DeleteModal';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useDispatch, useSelector } from 'react-redux';
import { MenuIcon } from '../../shared/icons';
import { fetchBoards } from './redux/actions';
import BoardLoader from '../../core/components/AllBoard/BoardLoader';

const count = Array(14)
  .fill(0)
  .map((el, i) => i + 1);

function BoardsPage() {
  const [info, setInfo] = useState({ name: '', color: '#ffffff', id: null });
  const [createModalActive, setCreateModalActive] = useState(false);
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const projectId = location.pathname.replace('/project/', '');

  const state = useSelector((state) => state);

  const onCreate = () => {
    setCreateModalActive(true);
  };

  const onEdit = (name, color, id) => () => {
    setInfo({ name: name, color: color, id: id });
    setEditModalActive(true);
  };

  const onDelete = (name, id) => () => {
    setInfo({ name: name, id: id });
    setDeleteModalActive(true);
  };

  useEffect(() => {
    dispatch(fetchBoards(projectId));
  }, [dispatch, projectId]);

  return (
    <Layout>
      <MainArea>
        <Title>
          {state.projects.projects &&
            state.projects.projects.find((project) => project._id === projectId).name}
        </Title>

        <Grid>
          <NewBoard onClick={onCreate}>
            <PlusIcon />
            Create new board
          </NewBoard>

          {!state.boards.isFetching
            ? state.boards.boards?.map((board, index) => {
                return (
                  <WrapperBoard key={index}>
                    <FlexRow>
                      <ColorBox boardColor={board.color} />
                      <div>
                        <Menu
                          menuButton={
                            <ButtonMenu>
                              <MenuIcon />
                            </ButtonMenu>
                          }>
                          <MenuItem onClick={onEdit(board.name, board.color, board._id)}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={onDelete(board.name, board._id)}>Delete</MenuItem>
                        </Menu>
                      </div>
                    </FlexRow>
                    <Line />
                    <Board to={`/kanban/${board._id}`}>{board.name}</Board>
                  </WrapperBoard>
                );
              })
            : count.map((item, index) => <BoardLoader key={index} />)}
        </Grid>
      </MainArea>
      <CreateBoard
        user={state.user}
        projectId={projectId}
        active={createModalActive}
        setActive={setCreateModalActive}
      />
      <EditBoard
        projectId={projectId}
        info={info}
        active={editModalActive}
        setActive={setEditModalActive}
      />
      <DeleteModal
        board
        user={state.user}
        info={info}
        active={deleteModalActive}
        setActive={setDeleteModalActive}
      />
    </Layout>
  );
}

export default BoardsPage;
