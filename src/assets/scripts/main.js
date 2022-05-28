/**
 * Import dependencies from node_modules
 * see commented examples below
 */

 
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */



//change style always is ok
function changeStyle (event) {

  if (event.target.validity.valid === false) {
      event.target.style.backgroundColor = "#fbccd1";

  } else {
      event.target.style.backgroundColor = "#bdecd6"  ;

  }
}



//message de bienvenida.
function welcomeMessage() {

  let checkPolitica = document.getElementById("politica-privacidad");
  let email = document.getElementById("email");

  /* Utilizamos la API de javascript para validar los elemnento INPUT del formulario */
  if (checkPolitica.checkValidity() && email.checkValidity()) { 
    let message  = document.getElementById("mensaje-de-recibido-contacto");
    message.innerHTML="<b>¡¡ Bienvenido!! En breve nos pondremos en contacto contigo...</b>";
    console.log("Mensaje pintado en pantalla.");
    message.style.display="block";
  } 
}



//setEventListenersCallbacks();
function setValidateFormAndMessageWelcomeCallbacks () {


  let message  = document.getElementById("mensaje-de-recibido-contacto");
  message.style.display="none";

  //validar campo input
  const input  = document.querySelector("input");
  input.addEventListener('focus', changeStyle);
  input.addEventListener('blur',changeStyle);

  //boton
  const btn = document.getElementById("btn-enviar-contacto");
  btn.addEventListener("click", welcomeMessage);

}



//+( function() {

  //setValidateFormAndMessageWelcomeCallbacks();

//} )();




