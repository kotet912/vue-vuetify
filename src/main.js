import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import firebaseConfig from './config/firebase'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);

// Components
import App from './App.vue'
import router from './router'
import store from './store'

const vuetify = createVuetify({
  components,
  directives,
})

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  store.dispatch('STATE_CHANGED', user);
});

createApp(App)
  .use(auth)
  .use(vuetify)
  .use(store)
  .use(router)
  .use(app)
  .mount('#app')