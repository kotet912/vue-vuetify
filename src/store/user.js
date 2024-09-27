import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
    UNSET_USER (state) {
      state.user.isAuthenticated = false
      state.user.uid = null
    },

  },
  actions: {
    SIGNUP ({ commit }, { email, password }) {
      const auth = getAuth();
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR')
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // commit('SET_USER', userCredential.uid);
          commit('SET_PROCESSING', false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          commit('SET_PROCESSING', false);
          commit('SET_ERROR', errorMessage, errorCode);
        });
    },
    SIGNING ({ commit }, { email, password }) {
      const auth = getAuth();
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR')
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // commit('SET_USER', userCredential.uid);
          commit('SET_PROCESSING', false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          commit('SET_PROCESSING', false);
          commit('SET_ERROR', errorMessage, errorCode);
        });
    },
    SIGNOUT () {
      const auth = getAuth();
      signOut(auth).then(() => {
      }).catch(() => {
      });
    },
    STATE_CHANGED ({ commit }, payload) {
      if (payload) {
        commit('SET_USER', payload.uid);
      } else {
        commit('UNSET_USER');
      }
    },
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated,
  },
  modules: {
  }
})