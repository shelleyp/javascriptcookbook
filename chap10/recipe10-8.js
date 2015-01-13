class Book {
     constructor(title, author, pubdate) {
       this.title = title;
       this.author = author;
       this.pubdate = pubdate;
     }
     getBook() {
       return this.author + " published " + this.title + " in " + this.pubdate;
     }
  }

  class TypedBook extends Book {
     constructor(title, author, pubdate, type) {
       super.constructor(title, author, pubdate);
       this.type = type;
     }
     getBook() {
       return super.getBook() + " - category: " + this.type;
     }
     getType() {
       return this.type;
     }
  }

  var bookA = new TypedBook("Winning Small", "Sally Author", 2012, "history");
  console.log(bookA.getBook()); 
  // Sally Author published Winning Small in 2012 - category: history
  console.log(bookA.getType()); // history

