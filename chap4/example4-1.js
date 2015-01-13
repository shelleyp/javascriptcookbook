function Tune(title,artist) {
  this.concatTitleArtist = function() {
    return title + " " + artist;
  }
}

// create instance, print out values
var happySong = new Tune("Putting on the Ritz", "Ella Fitzgerald");

// extend the object
Tune.prototype.addCategory = function(categoryName) {
  this.category = categoryName;
}

// add category
happySong.addCategory("Swing");

// print song out to new paragraph
var song = "Title and artist: " + happySong.concatTitleArtist() +
     " Category: " + happySong.category;

console.log(song);

