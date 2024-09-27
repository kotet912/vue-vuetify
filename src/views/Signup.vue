<template>
  <v-container fluid fill-height class="fill-height ">
    <v-layout align-center justify-center class="overflow-visible  ">
      <v-col xs12 sm8 md6>
        <v-card class="elevation-12 ">
          <v-toolbar dark color="primary ">
            <v-toolbar-title>Регистрация</v-toolbar-title>
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
            <v-btn color="primary rounded-lg" border="primary md" @click.prevent="signup"
              :disabled="processing || !valid">Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VueVuetifySignup',

  data () {
    return {
      email: null,
      password: null,
      valid: false,
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
        console.log('home');

        this.$router.push('/home');
      }
    }
  },

  methods: {
    signup () {
      this.$store.dispatch('SIGNUP', { email: this.email, password: this.password })
    }
  },
};
</script>