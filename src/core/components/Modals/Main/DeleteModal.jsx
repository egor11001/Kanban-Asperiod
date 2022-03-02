import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeleteBoard } from '../../../../pages/BoardsPage/redux/actions';
import { fetchDeleteProject } from '../../../../pages/MainPage/redux/actions';
import MainModal from './MainModal';
import { DeleteBtn, DeleteTitle, DeleteInner } from './styles';

const DeleteModal = ({ active, setActive, info, board, user }) => {
  const dispatch = useDispatch();

  const onSubmit = (data) => () => {
    data.userId = user.id;
    if (board) {
      data.boardIds = user.boardIds;
      dispatch(fetchDeleteBoard(data));
    } else {
      data.projectIds = user.projectIds;
      dispatch(fetchDeleteProject(data));
    }
    setActive(false);
  };

  const onClose = () => {
    setActive(false);
  };

  return (
    <MainModal onClose={onClose} active={active} setActive={setActive}>
      <DeleteInner>
        <DeleteTitle>Are you sure to delete {info.name} ?</DeleteTitle>
        <DeleteBtn onClick={onSubmit({ id: info.id, name: info.name })}>Delete</DeleteBtn>
      </DeleteInner>
    </MainModal>
  );
};

export default DeleteModal;
