import { api } from 'src/boot/axios';

export default {
  login({ email, password }) {
    const isEmail = email.indexOf('@') !== -1;
    return api.get(
      `/users?${isEmail ? 'email' : 'number'}=${email}&password=${password}`
    );
  },
};
