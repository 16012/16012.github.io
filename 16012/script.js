var lines;
var randomNumber;
var lastRandomNumber;

$(document.body).ready(function () {

  $.ajax({
    url: 'poems.txt'
  }).done(function(content) {

    lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');

    if (lines && lines.length) {
      $('#butt').on('click', function () {
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt((Math.random() * lines.length)/2 + 1);
          if (lines.length === 1) { break; }
        }
        lastRandomNumber = randomNumber;

        $('#text').text(lines[randomNumber]);
        $('#title').text(lines[randomNumber-1]);
      });
    }
  });
});