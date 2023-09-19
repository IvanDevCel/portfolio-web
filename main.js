import './style.scss'
import './lang.json'

document.addEventListener('DOMContentLoaded', function() {
  function setCookie() {
    /*Detectamos si existe la cookie, si no existe entrará en el if */
    if (true || !document.cookie.includes('isVisited=')) {
      /*Inicializamos las variables y establecemos que el elemento priemro tenga un display flex y un position fixed*/
      
      let welcomeBlock = document.querySelectorAll('.boxContainer');
      let btnNext = document.querySelectorAll('.nxt-elem');
      welcomeBlock[0].style.display = 'flex';
      welcomeBlock[0].style.position = 'fixed';
      //Recorremos los elementos que tenemos en lso botones, en este caso tenemos 3 botones
      btnNext.forEach((element, index) => {
        //Ejecutamos el click cada vez que se haya clickeado
        element.addEventListener('click', function() {
            //si el index es mayor o igual que el tamaño de la lista de los boxContainers entrará a 
            if(index >= welcomeBlock.length - 1){

              document.querySelector('#welcomeMessage').style.display = 'none';
            }else{
              //si no se entrará a esta parte del código donde establecer el display none

              welcomeBlock[index + 1].style.display = 'flex';
            }
            welcomeBlock[index].style.display = 'none';
        });
      });
    }

    //Creación de la cookie
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