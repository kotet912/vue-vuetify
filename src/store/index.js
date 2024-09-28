import { createStore } from 'vuex'
import userModule from './user'
import generalModule from './general'
import booksModule from './books'

export default createStore({
  modules: {
    user: userModule,
    general: generalModule,
    books: booksModule,
  }
})
