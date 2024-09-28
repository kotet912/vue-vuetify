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
        <v-btn flat @click.prevent="dialog = !dialog" v-if="isUserAuthenticated">
          <v-icon>mdi mdi-logout</v-icon>
          Выйти
        </v-btn>

        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="text-h5">
              Выйти?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary darken-1" text @click.prevent="signout(); dialog = false">
                Да
              </v-btn>
              <v-btn color="red darken-1" text @click="dialog = false">
                Нет
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar-items>
    </v-toolbar>
  </div>

</template>

<script>
export default {
  name: 'VueVuetifyAppHeader',
  data () {
    return {
      drawer: false,
      dialog: false,

    };
  },
  computed: {
    isUserAuthenticated () {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems () {
      return this.isUserAuthenticated
        ?
        [
          { icon: 'mdi mdi-eye', text: 'Читать', to: '/books' },
          { icon: 'mdi mdi-puzzle', text: 'Учить слова', to: '/words' },
          { icon: 'mdi mdi-account-box-outline', text: 'Мой Кабинет', to: '/profile' },
        ]
        :
        [
          { icon: 'mdi mdi-eye', text: 'Читать', to: '/books' },
          { icon: 'mdi mdi-puzzle', text: 'Учить слова', to: '/words' },
          { icon: 'mdi mdi-account-key', text: 'Войти', to: '/signing' },
          { icon: 'mdi mdi-account-plus', text: 'Зарегистрироваться', to: '/signup' },
        ];
    },
  },


  mounted () {

  },

  methods: {
    signout () {
      this.$store.dispatch('SIGNOUT');
      this.$router.push('/signing');



    }

  },
};
</script>