import React, { useEffect, useState } from 'react';
import Layout from '../../core/components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import {
  MainArea,
  SecondArea,
  HeadArea,
  Projects,
  Head,
  StyledLink,
  ButtonForProject,
  CreateBtn,
  Title,
  InnerTop,
  Content,
  ContainerBtn,
} from '../../core/components/Main/MainStyles';
import { DeleteIcon, UpdateIcon } from '../../shared/icons';
import CreateProject from '../../core/components/Modals/Main/CreateProject';
import EditProject from '../../core/components/Modals/Main/EditProject';
import DeleteModal from '../../core/components/Modals/Main/DeleteModal';
import { fetchProjects } from './redux/actions';
import MyLoader from '../../core/components/Main/MyLoader';

const MainPage = () => {
  const [info, setInfo] = useState({ name: '', description: '', id: null });
  const [createModalActive, setCreateModalActive] = useState(false);
  const [editModalActive, setEditModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const onCreate = () => {
    setCreateModalActive(true);
  };

  const onEdit = (name, description, id) => () => {
    setInfo({ description: description, name: name, id: id });
    setEditModalActive(true);
  };

  const onDelete = (name, id) => () => {
    setInfo({ ...info, name: name, id: id });
    setDeleteModalActive(true);
  };

  useEffect(() => {
    dispatch(fetchProjects(state.user.projectIds));
  }, [dispatch, state.user.projectIds]);

  return (
    <Layout>
      <MainArea>
        <InnerTop>
          <Title>All projects</Title>
          <CreateBtn onClick={onCreate}>Create project</CreateBtn>
        </InnerTop>
        <HeadArea>
          <Head>Name</Head>
          <Head>Description</Head>
        </HeadArea>
        <Content>
          {!state.projects.isFetching ? (
            state.projects.projects?.map((project) => (
              <SecondArea key={project._id}>
                <StyledLink to={`/project/${project._id}`}>
                  <Projects>{project.name}</Projects>
                  <Projects>{project.description}</Projects>
                </StyledLink>
                <ContainerBtn>
                  <ButtonForProject
                    onClick={onEdit(project.name, project.description, project._id)}>
                    <UpdateIcon />
                  </ButtonForProject>
                  <ButtonForProject isDelete onClick={onDelete(project.name, project._id)}>
                    <DeleteIcon />
                  </ButtonForProject>
                </ContainerBtn>
              </SecondArea>
            ))
          ) : (
            <MyLoader />
          )}
        </Content>
      </MainArea>
      <CreateProject
        user={state.user}
        active={createModalActive}
        setActive={setCreateModalActive}
      />
      <EditProject info={info} active={editModalActive} setActive={setEditModalActive} />
      <DeleteModal
        user={state.user}
        info={info}
        active={deleteModalActive}
        setActive={setDeleteModalActive}
      />
    </Layout>
  );
};

export default MainPage;
