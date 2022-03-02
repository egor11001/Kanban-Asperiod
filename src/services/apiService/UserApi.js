import $api from './base/axios';

export default class UserApi {
  static async userById(id) {
    return $api.get('/users/' + id);
  }

  static async update(id, data) {
    return $api.put('/users/update/' + id, data);
  }
}
