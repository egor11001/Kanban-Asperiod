import $api from './base/axios';

export default {
  tasks: () => $api.get('/tasks'),
  create: (name, description, assignedTo, boardId, statusId) =>
    $api.post('/tasks/create', {
      name: name,
      description: description,
      assignedTo: assignedTo,
      boardId: boardId,
      statusId: statusId,
    }),
  delete: (id) => $api.delete('/tasks/delete/' + id),
  update: (data) => $api.put('/tasks/update/' + data._id, data),
  getUsers: () => $api.get('/users'),
};
