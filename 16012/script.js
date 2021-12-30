var poems;
var randomNumber;
var lastRandomNumber;
var poem;
var title;
var text;

$(document.body).ready(function () {

  $.ajax({
    url: 'poems.txt'
  }).done(function(content) {

    poems = content.replace(/\r\n|\r/g, '\n').trim().split('\n\n\n\n');

    function next() {
      while (randomNumber === lastRandomNumber) {
        randomNumber = parseInt((Math.random() * poems.length));
        if (poems.length === 1) { break; }
      }
      lastRandomNumber = randomNumber;
      
      poem = poems[randomNumber];
      title = poem.split('\n\n')[0];
      text = poem.split('\n\n').slice(start=1).join('\n\n');
      
      $('#title').text(title);
      
      if (text.split('\n').length <= 20) {
        $('#text1').html(text); }
      else {
        $('#text1').html(poem.split('\n').slice(end=20).join('\n'));
        $('#text2').html(poem.split('\n').slice(start=21).join('\n')); }
    }

    $('#butt').on('click', next);
    $(document).ready(next);

  });
});