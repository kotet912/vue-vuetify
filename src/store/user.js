import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default ({
  state: {
    user: {
      isAuthenticated: false,
      uid: null,
    },
  },

  mutations: {
    SET_USER (state, payload) {
      state.user.isAuthenticated = true
      state.user.uid = payload
    },
    SET_PROCESSING (state, payload) {
      state.processing = payload
    },
    SET_ERROR (state, payload) {
      state.error = payload
    },
    CLEAR_ERROR (state) {
      state.error = null
    },
  },
  actions: {
    /* eslint-disable */
    SIGNUP ({ commit }, { email, password }) {
      const auth = getAuth();
      commit('SET_PROCESSING', true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          commit('SET_USER', userCredential.uid);
          commit('SET_PROCESSING', false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          commit('SET_PROCESSING', false);
          commit('SET_ERROR', error.message);
        });
    },
    SIGNING ({ commit }, { email, password }) {
      const auth = getAuth();
      commit('SET_PROCESSING', true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          commit('SET_USER', userCredential.uid);
          commit('SET_PROCESSING', false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          commit('SET_PROCESSING', false);
          commit('SET_ERROR', error.message);
        });
    }
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated,
  },
  modules: {
  }
})