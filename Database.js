module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }

  find(key) {
    return this.#storage[key]
  }

  saveAuthor(author) {
    this.#storage.authors.push(author)
  }

  findBookName(bookName) {
    return this.#storage.books.find(b => b.name === bookName)
  }

  saveBook(book) {
    const bookExists = this.findBookName(book.name)
    if (!bookExists) {
      ;[this.#storage.books.push(book)]
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookName(bookName)
    book?.addBooksToStock(quantity)
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookName(bookName)
    book?.removeFromStock(quantity)
  }

  findPosterName(posterName) {
    return this.#storage.Posters.find(p => p.name === posterName)
  }

  savePoster(poster) {
    const posterExists = this.findPosterName(poster.name)
    if (!posterExists) {
      ;[this.#storage.posters.push(poster)]
    }
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterName(posterName)
    poster?.addPostersToStock(quantity)
  }

  removePostersFromStock(posterName, quantity) {
    const poster = this.findPosterName(posterName)
    poster?.removeFromStock(quantity)
  }

  saveUser(user) {
    const userExist = this.#storage.users.find(u => u.email === user.email)
    if (!userExist) {
      this.#storage.users.push(user)
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order)
  }

  showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(o => o.data))
  }
}
