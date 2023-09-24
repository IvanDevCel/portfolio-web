import './style.scss';
import './lang.json';

let increase = false;
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
    <span class="typewriter">Hemos detectado que en tu equipo son las <span id="clock"></span></span>
    <button class="toggle-theme" value="ChangeColor">Cambiar color</button>
    <button class="nxt-elem">Finalizar configuración</button>
  </div>`;

document.addEventListener('DOMContentLoaded', () => {
  /* 
    This function sets a cookie to track if a user has visited the page before.
    If it's the first visit, it displays a welcome message using the createWelcomeDom() function.

    The welcome message is displayed only on the user's first visit and informs about the purpose of the page.
  */
  function setCookie() {
      // Check if the cookie doesn't exist or it's the first visit
      if (true || !document.cookie.includes('isVisited=')) {
        // Display the welcome message
        createWelcomeDom();

        // Initialize variables and constants for further interactions
        const welcomeBlock = document.querySelectorAll('.boxContainer');
        const btnNext = document.querySelectorAll('.nxt-elem');

        // Display the first welcome message container for the initial interaction
        welcomeBlock[0].style.display = 'flex';
        welcomeBlock[0].style.position = 'fixed';

        // Iterate through the buttons to handle interactions
        btnNext.forEach((element, index) => {
          // Handle button click events
          element.addEventListener('click', () => {
            // If it's the last screen, hide the welcome message
            if (index >= welcomeBlock.length - 1) {
              document.querySelector('#welcomeMessage').style.display = 'none';
            } else {
              // Show a clock with effects for the third block
              if (welcomeBlock[index + 1] == welcomeBlock[2]) {
                showTime();
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
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let secs = date.getSeconds();

    // Calculate remaining seconds until the next minute
    let remainingSecs = 60 - secs;

    // Display the time in the HTML element with the ID 'clock'
    document.getElementById('clock').innerHTML = hour + '<span class="colon">:</span>' + mins;

    const colon = document.querySelector('.colon');

    // If increase is not false we apply the animation
    if(increase !== false){
      colon.style.animation = 'blink 2s infinite';
    }
    
    // Set increase to true for subsequent calls
    increase = true;

    setTimeout(() => {
      colon.style.animation = 'blink 2s infinite';
    }, 3000);

    // Schedule the function to run after the remaining seconds for the next minute
    setTimeout(showTime, remainingSecs * 1000);
  }

    setCookie();

    /*Change color of the page*/
    function toggleTheme() {
      const bodyToggle = document.body;
      bodyToggle.classList.toggle('dark-theme');
      console.log("clicked");
    }

    document.querySelectorAll('.toggle-theme').forEach((button) => {
      button.addEventListener('click', toggleTheme);
    });
});