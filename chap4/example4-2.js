function Book (title, author) {
   this.getTitle=function() {
      return "Title: " + title;
   };
   this.getAuthor=function() {
      return "Author: " + author;
   };
}

function TechBook (title, author, category) {

   this.getCategory = function() {
      return "Technical Category: " + category;
   };

   this.getBook=function() {
      return this.getTitle() + " " + author + " " + this.getCategory();
   };
  
  Book.apply(this, arguments);
}


TechBook.prototype = Object.create(Book.prototype);
TechBook.prototype.constructor = TechBook;

// get all values
var newBook = new TechBook("The JavaScript Cookbook",
  "Shelley Powers", "Programming");
  
console.log(newBook.getBook());

// now, individually
console.log(newBook.getTitle());
console.log(newBook.getAuthor());
console.log(newBook.getCategory());

