class Book {
    constructor(title, author, content) {
      this._title = title;
      this._author = author;
      this._content = content;
    }
  
    getTitle() {
      return this._title;
    }
  
    getAuthor() {
      return this._author;
    }
  
    getContent() {
      return this._content;
    }
}
  class BoldDecorator {
    constructor(book) {
      this._book = book;
    }
  
    getTitle() {
      return this._book.getTitle();
    }
  
    getAuthor() {
      return this._book.getAuthor();
    }
  
    getContent() {
      const content = this._book.getContent();
      return `<b>${content}</b>`;
    }
  }
const plainBook = new Book("JavaScript Programming", "Jane Doe", "This is the content of the book.");
const boldBook = new BoldDecorator(plainBook);

console.log("Plain Book:");
console.log(`Title: ${plainBook.getTitle()}`);
console.log(`Author: ${plainBook.getAuthor()}`);
console.log(`Content: ${plainBook.getContent()}`);

console.log("\nBold Book:");
console.log(`Title: ${boldBook.getTitle()}`);
console.log(`Author: ${boldBook.getAuthor()}`);
console.log(`Content: ${boldBook.getContent()}`);
