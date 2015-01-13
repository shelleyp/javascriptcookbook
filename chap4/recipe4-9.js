function Book (title, author) {
   this.getTitle=function() {
     return "Title: " + title;
   };

   this.getAuthor=function() {
     return "Author: " + author;
   };

   this.replaceTitle = function (newTitle) {
      var oldTitle = title;
      title = newTitle;
   };

   this.replaceAuthor = function(newAuthor) {
      var oldAuthor = author;
      author = newAuthor;
   };
}

function TechBook (title, author, category) {
   this.getCategory = function() {
      return "Technical Category: " + category;
   };

   Book.apply(this,arguments);
  
   this.changeAuthor = function(newAuthor) {
      this.replaceAuthor(newAuthor);
      
      return this;  // necessary to enable method chaining
   };
}

var newBook = new TechBook("I Know Things", "Smart Author", "tech");
console.log(newBook.changeAuthor("Book K. Reader").getAuthor());

