import $api from './base/axios';

export default {
  boards: () => $api.get('/boards'),
  create: (name, color, projectId) => $api.post('/boards/create', { name, color, projectId }),
  delete: (id) => $api.delete('/boards/delete/' + id),
  update: (name, color, projectId, id) =>
    $api.put('/boards/update/' + id, { name, color, projectId }),
};
