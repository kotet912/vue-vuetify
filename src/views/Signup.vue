<template>
  <v-container fluid fill-height class="fill-height ">
    <v-layout align-center justify-center class="overflow-visible  ">
      <v-col xs12 sm8 md4>
        <v-card class="elevation-12 ">
          <v-toolbar dark color="primary ">
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="E-mail" type="text" required
                v-model="email"></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="Пароль" label="Password" type="password" required
                v-model="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary rounded-lg" border="primary md" @click.prevent="signup">Зарегистрироваться</v-btn>
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
      password: null
    };
  },

  mounted () {
  },

  methods: {
    signup () {
      this.$store.dispatch('SIGNUP', { email: this.email, password: this.password })
    }
  },
};
</script>