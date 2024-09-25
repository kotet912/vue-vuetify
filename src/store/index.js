import { createStore } from 'vuex'
import userModule from './user'
import generalModule from './general'

export default createStore({
  modules: {
    user: userModule,
    general: generalModule,
  }
})
