import $api from './base/axios';

export default {
  fetchStatuses: () => $api.get('/statuses'),
  create: (data) => $api.post('/statuses/create', data),
  update: (name, boardIds, id) =>
    $api.put('/statuses/update/' + id, { name: name, boardIds: boardIds }),
};
