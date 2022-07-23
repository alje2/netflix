import { defineStore } from 'pinia';

import state from './state';
import actions from './actions';
import getters from './getters';

export const useAuthStore = defineStore('AuthStore', {
  state,
  actions,
  getters,
});
