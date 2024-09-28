<template>
  <v-container grid-list-md>
    <v-row class="justify-center">
      <v-col xs="12" sm="10" md="8">
        <v-container fluid grid-list-xs>
          <v-row class="pa-4">
            <v-col>
              <v-text-field v-model="searchText" variant="solo" append-inner-icon="mdi-magnify" clearable
                label="Поиск книги:"></v-text-field>
            </v-col>

          </v-row>
        </v-container>
      </v-col>
      <v-col v-for="item in filterBooks" :key="item.id" xs="12" sm="10" md="8" class="pa-2">
        <v-card color="info" class="white--text">
          <v-container fluid>
            <v-row class="pa-4">
              <v-col xs="5" md="4" class="pa-0">
                <v-img cover height="auto" aspect-ratio="1/1" max-height="250" :src="item.imagesId[0]">
                </v-img>
                <div class="text-center pa-4">
                  <v-btn variant="flat" color="white">
                    <v-icon class="mr-1"> mdi mdi-eye</v-icon>
                    YouTube</v-btn>
                </div>
              </v-col>
              <v-col xs="7" md="8">
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle>Авторы: {{ getBookAuthors(item.authors) }}</v-card-subtitle>
                <v-card-text>{{ item.description }}</v-card-text>
                <v-divider color="white opacity-100"></v-divider>
                <v-card-subtitle class="pa-4 pt-2 pb-2">Уровень: {{ getBookLevels(item.level) }}, {{ item.parts }}
                  частей</v-card-subtitle>
                <v-card-actions class="align-center ">
                  <v-rating v-model="item.rating" :max="5" color="yellow" readonly density="compact" half-increments>
                  </v-rating>
                  <div class="ml-1">
                    <span class="text-subtitle-1">{{ item.rating }}</span>
                    <span class="text-subtitle-1"> ({{ item.ratingCount }})</span>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn variant="flat" color="primary">Открыть</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VueVuetifyBooksList',

  data () {
    return {
      searchText: null
    };
  },

  computed: {
    books () {
      return this.$store.getters.getBooks;
    },
    filterBooks () {
      if (!this.searchText) {
        return this.books;
      } else {
        return this.books.filter(book =>
          book.title.toLowerCase().includes(this.searchText.toLowerCase())
          || book.authors.some(author => author.toLowerCase().includes(this.searchText.toLowerCase()))
          || book.description.toLowerCase().includes(this.searchText.toLowerCase())
          || book.level.some(level => level.toLowerCase().includes(this.searchText.toLowerCase()))
        );
      }
    }
  },
  mounted () {

  },

  methods: {
    getBookAuthors (authors) {
      return authors.join(', ');
    },
    getBookLevels (level) {
      return level.join('/');
    },


  },
};
</script>
