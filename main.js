import './style.scss'

/*function displayWelcomeMessage() {
  if (document.cookie.includes('isVisited')) {
    console.log('Welcome back!');
  } else {
    
  }
}

// Llama a esta función para mostrar el mensaje de bienvenida
displayWelcomeMessage();*/
  function toggleTheme() {
    const bodyToggle = document.body;
    bodyToggle.classList.toggle('dark-theme');
    //console.log(toggleButton);
  }
  document.querySelector('.toggle-theme').addEventListener('click', toggleTheme);


document.addEventListener('DOMContentLoaded', function() {
  function setCookie() {
    const welcomeDiv = document.getElementById('welcomeMessage');

    if (!document.cookie.includes('isVisited')) {
      welcomeDiv.innerHTML = 'BIENVENIDO A MI PÁGINA WEB';
    }else{
      welcomeDiv.innerHTML = 'Hola de nuevo';
    }

    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = 'isVisited=true; ' + expires + ';';
  }

  // Llama a la función para mostrar el mensaje de bienvenida
  setCookie();

});

