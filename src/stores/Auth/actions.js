import auth from 'src/api/auth';

export default {
  login(data) {
    this.loading = true;
    this.error = false;
    return auth
      .login(data)
      .then((response) => {
        if (response.data.length) {
          this.user = response.data[0];
          this.isLoggedIn = true;
        } else this.error = 'Incorrect credentials. Please try again.';
        return response.data;
      })
      .catch((error) => {
        this.router.push({
          name: 'Error',
          params: { error: error },
        });
        // throw error;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
