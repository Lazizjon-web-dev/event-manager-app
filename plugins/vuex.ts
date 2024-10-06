import { createStore } from 'vuex';

import getters from '~/store/getters';
import actions from '~/store/actions';
import mutations from '~/store/mutations';
import state from '~/store/state';

const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
