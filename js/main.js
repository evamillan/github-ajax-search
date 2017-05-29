var inputUser = document.querySelector('.js-github-user');
var searchBtn = document.querySelector('.js-search-btn');
var resultUsername = document.querySelector('#js-username');
var resultRepositories = document.querySelector('#js-repositories');
var resultPicture = document.querySelector('#js-picture');

function APIsearch() {
  var apiURL= "https://api.github.com/users/" + inputUser.value;

  var request = new XMLHttpRequest();

  request.open('GET', apiURL, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      resultUsername.innerHTML = data.name;
      resultRepositories.innerHTML = data.public_repos;
      resultPicture.innerHTML = '<img src="' + data.avatar_url + '">';
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };

  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}

searchBtn.addEventListener("click", APIsearch);
