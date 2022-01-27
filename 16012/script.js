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
      
      if (window.matchMedia("(max-width: 700px)").matches) {
        if (text.split('\n').length <= 20) {
          $('#text1').html(text); 
          $('#text2').html(''); }
        else {
          $('#text1').html(text.split('\n').slice(start=0, end=21).join('\n'));
          $('#text2').html(text.split('\n').slice(start=21).join('\n')); }
      }
      else {
        $('#text1').html(text); 
        $('#text2').html('');
      }
    }

    $('#butt').on('click', next);
    $(document).ready(next);

  });
});