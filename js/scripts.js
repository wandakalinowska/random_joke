var url = 'https://api.icndb.com/jokes/random';
getJoke(); // ->Wygeneruje nam żart przy wejśćiu na stronę

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}


