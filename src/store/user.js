import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default ({
  state: {
    user: {
      isAuthenticated: false,
      uid: null,
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    /* eslint-disable */
    SIGNUP ({ commit }, { email, password }) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },
  modules: {
  }
})