const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.udemy.com/',
            showBooks: true,
            books: [{
                title: "Final Empire",
                author: 'Marlon',
                age: 31,
                img: 'assets/crash.PNG',
                isFave: true
            }, {
                title: "Final Empire II",
                author: 'Marlon',
                age: 31,
                img: 'assets/Nuccomiisproduction.PNG',
                isFave: false
            }, {
                title: "Final Empire III",
                author: 'Marlon',
                age: 31,
                img: 'assets/Me & GabGab.PNG',
                isFave: true
            }],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(name) {

            this.title = name
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        mouseMove(e) {

            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFave = !book.isFave
        }
    },
    computed: {
        filteredBooks() { 
            return this.books.filter((book) => book.isFave)
        }
    }

});

app.mount('#app');