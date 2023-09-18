import './style.scss'

document.addEventListener('DOMContentLoaded', function() {
  function setCookie() {
    const welcomeDiv = document.getElementById('welcomeMessage');

    if (!document.cookie.includes('isVisited')) {
      let welcomeBlock = document.querySelectorAll('#welcomeMessage .boxContainer');
      welcomeBlock.forEach(function(element){
        element.style.display = 'block';
      })
    }

    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = 'isVisited=true; ' + expires + ';';
  }

  // Llama a la función para mostrar el mensaje de bienvenida
  setCookie();

  function toggleTheme() {
    const bodyToggle = document.body;
    bodyToggle.classList.toggle('dark-theme');
    //console.log(toggleButton);
  }
  
  document.querySelector('.toggle-theme').addEventListener('click', toggleTheme);

});

