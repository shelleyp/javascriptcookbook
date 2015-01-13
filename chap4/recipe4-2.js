function Tune(title,artist) {
  var title = title;
  var artist = artist;
  Tune.prototype.concatTitleArtist = function() {
    return title + " " + artist;
   }
}

var sad = new Tune('Sad Song', 'Sad Singer')
var happy = new Tune('Happy', 'Happy Singer');

console.log(sad.concatTitleArtist()); // Happy Happy Singer 
