<template>
  <v-container>
    <v-layout>
      <v-row>
        <v-col v-for="item in books" :key="item.id" xs="12" sm="10" md="8" offset-sm="1" offset-md="2">
          <v-card color="info" class="white--text">
            <v-container fluid>
              <v-layout>
                <v-col xs="5" md="4">
                  <v-img contain height="auto" :src="item.imagesId[0]">
                  </v-img>
                </v-col>
                <v-col xs="7" md="8">
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle>{{ item.author }}</v-card-subtitle>
                  <v-card-text>{{ item.description }}</v-card-text>
                </v-col>
              </v-layout>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VueVuetifyBooksList',

  data () {
    return {

    };
  },

  computed: {
    books () {
      return this.$store.getters.getBooks;
    },
  },
  mounted () {

  },

  methods: {

  },
};
</script>