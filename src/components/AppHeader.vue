<template>
  <v-toolbar app dark class="bg-primary">
    <v-toolbar-title v-text="'Vue Vutify'"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-for="(item, i) in menuItems" :key="`item${i}`" :to="item.to" :prepend-icon="item.icon">
        {{ item.text }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

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

    };
  },

  mounted () {

  },

  methods: {

  },
};
</script>