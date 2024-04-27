function mostrarContenido(id) {
    // Ocultar todos los contenidos excepto el menú
    var contenidos = document.querySelectorAll('.content');
    contenidos.forEach(function(contenido) {
        if (contenido.id !== 'menu') {
            contenido.style.display = 'none';
        }
    });

    // Mostrar solo el contenido correspondiente al ID
    var contenidoMostrado = document.getElementById(id);
    contenidoMostrado.style.display = 'block';
}

function mostrarPerfil() {
    mostrarContenido('perfil');
  }

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("scrollTopButton").style.display = "block"; /* Mostrar el botón cuando se desplaza hacia abajo */
      } else {
          document.getElementById("scrollTopButton").style.display = "none"; /* Ocultar el botón cuando está en la parte superior */
      }
  }
  
  function scrollToTop() {
      document.body.scrollTop = 0; /* Para Safari */
      document.documentElement.scrollTop = 0; /* Para otros navegadores */
  }
  

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.formulario-contacto');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe por el método tradicional

        var formData = new FormData(form);

        enviarDatos(formData);
    });

    function enviarDatos(formData) {
        fetch('formulario.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                // Puedes redirigir al usuario a una página de confirmación o realizar otras acciones aquí
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.');
        });
    }
});
