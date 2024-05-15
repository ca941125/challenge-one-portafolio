//menu hamburguesa responsive 
document.getElementById("menu-desplegable").addEventListener("click", function() {
    let dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});


//Haz tú validación en javascript acá
//forma corta

const validarFormulario = () => {
    const campos = ['nombre', 'email', 'asunto', 'mensaje'];
  
    for (const campo of campos) {
      const valor = document.getElementById(campo).value.trim();
      if (valor === "") {
        alert(`Por favor, completa el campo ${campo}.`);
        return false;
      }
      if (campo === 'email' && !emailValido(valor)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
      }
    }
    return true; // Se pueden enviar los datos del formulario al servidor
  }
  
  const emailValido = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  document.getElementById('btn-enviar').addEventListener('click', validarFormulario);
  
//forma larga 
// const btnEnviar = document.getElementById('btn-enviar');

// const validarFormulario = () => {
//   const nombreContacto = document.getElementById('nombre');
//   const emailContacto = document.getElementById('email');
//   const asuntoContacto = document.getElementById('asunto');
//   const mensajeContacto = document.getElementById('mensaje');

//   if (nombreContacto.value === "") {
//     alert("Por favor, escribe tu nombre de usuario.");
//     return false;
//   }
    
//   if (emailContacto.value === "") {
//     alert("Por favor, escribe tu correo electrónico");
//     return false;
//   }

//   if(asuntoContacto.value === ""){
//     alert("Por favor, escribe el asunto.");
//     return false; 
//   }

//   if(mensajeContacto.value === ""){
//     alert("Por favor, escribe un mensaje")
//     return false;
//   }

//   if (!emailValido(emailContacto.value)) {
//     alert("Por favor, escribe un correo electrónico válido");
//     return false;
//   }
  
//   return true; //Se pueden enviar los datos del formulario al servidor
// }

// const emailValido = email => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// btnEnviar.addEventListener('click', validarFormulario);