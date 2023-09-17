import './style.scss'

function setCookie(){
  if(!document.cookie.includes('isViisted')){
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires =  'expires=' + date.toUTCString();
    document.cookie = "isVisited=true; " + expires + ";"; // secure; HttpOnly; Añadir al construirlo en el servidor
  }
}

setCookie();