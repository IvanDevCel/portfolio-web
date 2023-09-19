import './style.scss'
import './lang.json'

document.addEventListener('DOMContentLoaded', function() {
  function setCookie() {
    /*Detectamos si existe la cookie, si no existe entrará en el if */
    if (true || !document.cookie.includes('isVisited=')) {
      //Iniciamos la creación del contenedor welcomeMessage
      createWelcomeDom();
      /*Inicializamos las variables y establecemos que el elemento primero tenga un display flex y un position fixed*/

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
  
  function createWelcomeDom(){
      /*Iniciamos la variable para construir el contenedor*/
      const welcomeMessageDiv = document.createElement('div');
      welcomeMessageDiv.id = 'welcomeMessage';
      document.body.appendChild(welcomeMessageDiv);

      const welcomeMessageHTML = `
        <div class="boxContainer" hidden>
          <span class="typewriter" style="--n:64">Bienvenido a mi portfolio personal. Soy Iván, un desarrollador front-end</span>
          <button class="nxt-elem">Continuar -></button>
        </div>
        <div class="boxContainer" hidden>
          <span class="typewriter">Antes de explorar mis proyectos, realicemos algunos ajustes para mejorar su experiencia</span>
          <button class="nxt-elem">Continuar -></button>
        </div>
        <div class="boxContainer" hidden>
          <span class="typewriter">Hemos detectado que en tu equipo son las</span>
          <button class="toggle-theme" value="ChangeColor">Cambiar color</button>
          <button class="nxt-elem">Finalizar configuración</button>
        </div>`;
        welcomeMessageDiv.innerHTML= welcomeMessageHTML;
  }

  document.querySelectorAll('.toggle-theme').forEach(function(button) {
    button.addEventListener('click', toggleTheme);
  });
});