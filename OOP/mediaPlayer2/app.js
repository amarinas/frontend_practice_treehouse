var playlist = new Playlist();


var blah1 = new Song("blah blla", "the who", "3:30");
var blah2 = new Song("woo woo", "the why", "3:00");

playlist.add(blah1);
playlist.add(blah2);

var playListElement = document.getElementById("playlist");

playlist.renderInElement(playListElement);


var playButton = document.getElementById("play");
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playListElement);
}
var nextButton = document.getElementById("next");
var nextButton = document.getElementById("next");
nextButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playListElement);
}
var stopButton = document.getElementById("stop");
var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playListElement);
}
