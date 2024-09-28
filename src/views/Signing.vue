<template>
  <v-container class="fluid fill-height ">
    <v-row class="overflow-visible justify-center align-center">
      <v-col xs="10" sm="8" md="6">
        <v-card class="elevation-12 ">
          <v-toolbar color="primary">
            <v-toolbar-title>Вход</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert v-if="error" dense border="left" type="warning" :value="error">
              {{ error }}
            </v-alert>
            <v-form v-model="valid">
              <v-text-field prepend-icon="mdi mdi-account" name="login" label="E-mail" type="text" required
                v-model="email" :rules="emailRules"></v-text-field>
              <v-text-field id="password" prepend-icon="mdi mdi-lock" name="Пароль" label="Password" type="password"
                required v-model="password" :rules="passwordRules"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary rounded-lg " border="primary md" @click.prevent="signing" :loading="processing"
              :disabled="processing || !valid">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VueVuetifySigning',

  data () {
    return {
      email: null,
      password: null,
      valid: false,
      loader: null,
      loading: false,
      emailRules: [
        v => !!v || 'Введите электронную почту',
        v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Введите корректный адрес электронной почты'
      ],
      passwordRules: [
        v => !!v || 'Введите пароль',
        v => v.length >= 6 || 'Пароль должен быть не менее 6 символов'
      ]
    };
  },
  computed: {
    error () {
      return this.$store.getters.getError;
    },
    processing () {
      return this.$store.getters.getProcessing;
    },
    isUserAuthenticated () {
      return this.$store.getters.isUserAuthenticated;
    }
  },
  watch: {
    isUserAuthenticated (authenticated) {
      if (authenticated) {
        this.$router.push('/home');
      }
    },
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },

  methods: {
    signing () {
      this.$store.dispatch('SIGNING', { email: this.email, password: this.password })
    }
  },
};
</script>