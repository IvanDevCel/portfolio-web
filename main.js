import './style.scss';
import './lang.json';

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

let increase = 0;

document.addEventListener('DOMContentLoaded', () => {
    function setCookie() {
      if (true || !document.cookie.includes('isVisited=')) {
        createWelcomeDom();
        const welcomeBlock = document.querySelectorAll('.boxContainer');
        const btnNext = document.querySelectorAll('.nxt-elem');
        welcomeBlock[0].style.display = 'flex';
        welcomeBlock[0].style.position = 'fixed';

        btnNext.forEach((element, index) => {
          element.addEventListener('click', () => {
            if (index >= welcomeBlock.length - 1) {
              document.querySelector('#welcomeMessage').style.display = 'none';
            } else {
              if (welcomeBlock[index + 1] == welcomeBlock[2]) {
                showTime();
                setTimeout(() => {
                  const colon = document.querySelector('.colon');
                  colon.style.animation = 'blink 2s infinite';
                }, 3000);
              }
              welcomeBlock[index + 1].style.display = 'flex';
            }
            welcomeBlock[index].style.display = 'none';
          });
        });
      }

      const date = new Date();
      date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
      const expires = 'expires=' + date.toUTCString();
      document.cookie = 'isVisited=true; ' + expires + ';';
    }

    function createWelcomeDom() {
      const welcomeMessageDiv = document.createElement('div');
      welcomeMessageDiv.id = 'welcomeMessage';
      document.body.appendChild(welcomeMessageDiv);
      welcomeMessageDiv.innerHTML = welcomeMessageHTML;
    }

    function toggleTheme() {
      const bodyToggle = document.body;
      bodyToggle.classList.toggle('dark-theme');
    }

    document.querySelectorAll('.toggle-theme').forEach((button) => {
      button.addEventListener('click', toggleTheme);
    });

    function showTime() {
      const date = new Date();
      let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      let secs = date.getSeconds();

      let remainingSecs = 60 - secs;
      increase ++;
      document.getElementById('clock').innerHTML = hour + '<span class="colon">:</span>' + mins;
      setTimeout(showTime, remainingSecs * 1000);
    }

    setCookie();
});