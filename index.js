
$(document).ready(function(){
    $('.carousel').carousel();
  });
  
     

      function redirigirAIndex() {
        window.location.href = 'homepage.html';
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