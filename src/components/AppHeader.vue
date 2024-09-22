<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="`item${i}`" :to="item.to" :prepend-icon="item.icon">
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark class="bg-primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push('/')" :href="href" style="cursor: pointer;" class="headline text-uppercase">
        <span>Vue Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in menuItems" :key="`item${i}`" :to="item.to" :prepend-icon="item.icon">
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>

</template>

<script>
export default {
  name: 'VueVuetifyAppHeader',

  computed: {
    menuItems () {
      return [
        { icon: 'mdi mdi-eye', text: 'Читать', to: '/books' },
        { icon: 'mdi mdi-puzzle', text: 'Учить слова', to: '/words' },
        { icon: 'mdi mdi-account-box-outline', text: 'Мой Кабинет', to: '/profile' },
        { icon: 'mdi mdi-logout', text: 'Выйти', to: '/logout' },
        { icon: 'mdi mdi-account-key', text: 'Войти', to: '/signing' },
        { icon: 'mdi mdi-account-plus', text: 'Зарегистрироваться', to: '/signup' },
      ];
    },
  },
  data () {
    return {
      drawer: false,
    };
  },

  mounted () {

  },

  methods: {

  },
};
</script>