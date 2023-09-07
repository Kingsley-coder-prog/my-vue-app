import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      request: [],
    };
  },
  actions,
  mutations,
};
