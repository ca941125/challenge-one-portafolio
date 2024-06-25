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
