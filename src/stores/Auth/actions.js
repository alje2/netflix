import auth from 'src/api/auth';

export default {
  login(data) {
    this.loading = true;
    this.error = false;
    return auth
      .login(data)
      .then((response) => {
        this.user = response.data[0];
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.isLoggedIn = true;
        return response.data;
      })
      .catch((error) => {
        this.error = 'Incorrect credentials. Please try again.';
        // this.error = error.response.data.error;
        throw error;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
