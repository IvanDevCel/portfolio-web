import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  let isExecuted = false;
  let welcomeBlockLength = 0;

  const welcomeMessageHTML = `
    <div class="boxContainer" hidden>
      <span class="typewriter">Bienvenido a mi portfolio. Soy Iván, desarrollador <span>FRONTEND</span></span>
      <button class="nxt-elem btnWlc">Continuar ></button>
    </div>
    <div class="boxContainer" hidden>
      <span class="typewriter">Antes de explorar mis proyectos, realicemos algunos ajustes para mejorar tu experiencia</span>
      <button class="nxt-elem btnWlc">Continuar ></button>
    </div>
    <div class="boxContainer" hidden>
      <span class="typewriter">Hemos detectado que en tu dispositivo son las 
        <span id="clock"></span>
        <span class="statusDay"></span>
      </span>
      <div class="btnGroup">
        <button class="toggle-theme btnWlc" value="ChangeColor">Cambiar color</button>
        <button class="nxt-elem btnWlc">Finalizar configuración</button>
      </div>
    </div>`;
  
  /*
    This function sets a cookie to track if a user has visited the page before.
    If it's the first visit, it displays a welcome message using the createWelcomeDom() function.
    The welcome message is displayed only on the user's first visit and informs about the purpose of the page.
  */
  function setCookie() {
      if (true || !document.cookie.includes('isVisited=')) { //set true to debug the cookie
        // Display the welcome message
        createWelcomeDom();

        const welcomeBlock = document.querySelectorAll('.boxContainer');
        const btnNext = document.querySelectorAll('.nxt-elem');

        // Display the first welcome message container for the initial interaction
        welcomeBlock[0].style.display = 'flex';

        // Iterate through the buttons to handle interactions
        btnNext.forEach((element, index) => {
          element.addEventListener('click', () => {
            //With this variable what we do is equalize the index of the button to the welcomeBlockLength*1
            welcomeBlockLength = index;
            if (index >= welcomeBlock.length - 1) {
              document.getElementById('welcomeMessage').style.display = 'none';
            } else {
              // Show a clock with effects for the third block
              if (welcomeBlock[index + 1] == welcomeBlock[2]) {
                showTime();
                untoggleTheme();
              }
              // Show the next screen and hide the current one
              welcomeBlock[index + 1].style.display = 'flex';
            }
            // Hide the current container
            welcomeBlock[index].style.display = 'none';
          });
        });
      }

      // Set a cookie to mark the user's first visit
      const date = new Date();
      date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
      const expires = 'expires=' + date.toUTCString();
      document.cookie = 'isVisited=true; ' + expires + ';';
  }

  //We create the Dom welcome message on the webpage
  function createWelcomeDom() {
    const welcomeMessageDiv = document.createElement('div');
    welcomeMessageDiv.id = 'welcomeMessage';
    document.body.appendChild(welcomeMessageDiv);
    welcomeMessageDiv.innerHTML = welcomeMessageHTML;
  }

  /*
   This function displays the current time and updates it every minute.
   It utilizes animations to make the time display visually appealing.
  */
  function showTime() {
      const date = new Date();
      // Format hours, minutes, and seconds with leading zeros if needed
      const hour = date.getHours().toString().padStart(2, '0');
      const mins = date.getMinutes().toString().padStart(2, '0');
      // Calculate remaining seconds until the next minute
      let remainingSecs = 60 - date.getSeconds();
      
      document.getElementById('clock').innerHTML = `${hour}<span class="colon">:</span>${mins},`;

      // If isExecuted is not false we apply the animation
      document.querySelector('.colon').style.animation = isExecuted !== false ? 'blink 1s infinite': "none";
      
      // Set isExecuted to true for subsequent calls
      isExecuted = true;

      setTimeout(() => {
        document.querySelector('.colon').style.animation = 'blink 1s infinite';
      }, 2000);

      //We created the global variable welcomeBlockLenght to prevent the execution before click the last button of the configuration
      if (welcomeBlockLength === 2) {
        return;
      }

      setTimeout(showTime, remainingSecs * 1000);
  }

  function untoggleTheme(){
    // Display the time in the HTML element with the ID 'clock'
    const date = new Date();
    var hour = date.getHours().toString().padStart(2, '0');
    const isDay = hour >= 8 && hour <= 11;
    const statusText = isDay ? 'como es de día he mantenido un tema claro, para facilitar la lectura' : 'ya son más de las 20 de la tarde he ajustado el tema para descansar tus ojos';
    document.querySelector('.statusDay').innerHTML = `${statusText}`;
    if(!isDay && isExecuted){
      setTimeout(toggleTheme, 4000);
    }
  }
  
  setCookie();

  /*Change color of the page*/
  function toggleTheme() {
    const bodyToggle = document.body;
    bodyToggle.classList.toggle('dark-theme');
  }

  document.querySelectorAll('.toggle-theme').forEach((button) => {
    button.addEventListener('click', toggleTheme);
  });
});