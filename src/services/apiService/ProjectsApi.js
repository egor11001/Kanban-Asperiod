import $api from './base/axios';

export default {
  projects: () => $api.get('/projects'),
  create: (name, description) =>
    $api.post('/projects/create', { name: name, description: description }),
  delete: (id) => $api.delete('/projects/delete/' + id),
  update: (name, description, id) =>
    $api.put('/projects/update/' + id, { name: name, description: description }),
};
