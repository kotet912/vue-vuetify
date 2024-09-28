export default ({
  state: {
    books: [
      {
        id: '2342dsfeff',
        title: 'Book 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, metus vel consectetur fermentum, nunc libero congue lectus, sed tempor neque urna id erat. Donec id libero vel velit posuere ullamcorper. Donec vel neque vel neque elementum facilisis.',
        imagesId: ['http://placehold.it/350x250', 'http://placehold.it/350x250', 'http://placehold.it/350x250'],
        authors: ['Author 1', 'Author 2'],
        parts: 5,
        level: ['B1', 'B2', 'B3', 'B4', 'B5'],
        rating: 4.5,
        ratingCount: 100,
        dateOfPublication: '2021-12-15',
      },
      {
        id: '2342ds234feff',
        title: 'Book 2',
        description: 'lorem ipsum dolor sit amet, consect elit. Sed consectetur, metus vel consectetur fermentum, nunc libero congue lectus, sed tempor neque urna id erat. Donec id libero vel velit pos',
        imagesId: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
        authors: ['Author 3', 'Author 2'],
        parts: 9,
        level: ['B4', 'B5'],
        rating: 4.3,
        ratingCount: 100,
        dateOfPublication: '2024-11-09',
      },
      {
        id: '2342rwds234feff',
        title: 'Book 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, metus vel consectetur fermentum, empor nequeo vel velit posuere',
        imagesId: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
        authors: ['Author 3', 'Author 2'],
        parts: 7,
        level: ['A2'],
        rating: 4,
        ratingCount: 100,
        dateOfPublication: '2023-06-09',
      },
    ],
  },

  mutations: {
    SET_BOOKS (state, payload) {
      state.books = payload
    },

  },
  getters: {
    getBooks: (state) => state.books,
  },

})
