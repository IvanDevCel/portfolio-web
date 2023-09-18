import './style.scss'
import './lang.json'

document.addEventListener('DOMContentLoaded', function() {
  function setCookie() {
    if (!document.cookie.includes('isVisited=')) {
      let welcomeBlock = document.querySelectorAll('#welcomeMessage .boxContainer');
      let btnNext = document.querySelectorAll('.nxt-elem');
      welcomeBlock[0].style.display = 'flex';
      welcomeBlock[0].style.position = 'fixed';

      btnNext.forEach((element, index) => {
        element.addEventListener('click', function() {
            if(index >= welcomeBlock.length - 1){
              document.querySelector('#welcomeMessage').style.display = 'none';
            }else{
              welcomeBlock[index + 1].style.display = 'flex';
            }
            welcomeBlock[index].style.display = 'none';
        });
      });
    }else{
        document.querySelector('#welcomeMessage').style.display = 'none';
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
  
  document.querySelectorAll('.toggle-theme').forEach(function(button) {
    button.addEventListener('click', toggleTheme);
  });
});