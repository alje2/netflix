import { api } from 'src/boot/axios';

export default {
  login({ email, password }) {
    return api.get(`/users?email=${email}&password=${password}`);
  },
};
