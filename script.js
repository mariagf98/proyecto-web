// Espera a que todo el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  // === FONDO ROTATIVO EN TÍTULO ===
  const fondo = document.getElementById('nombre-con-fondo');
  const imagenesFondo = [
    'img/centro/centro1.png',
    'img/centro/centro2.jpg',
    'img/centro/centro3.jpg',
    'img/centro/centro4.jpg'
  ];

  let index = 0;

  function cambiarFondo() {
    fondo.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % imagenesFondo.length;
      fondo.style.backgroundImage = `url("${imagenesFondo[index]}")`;
      fondo.style.opacity = 1;
    }, 1000); // tiempo igual al transition en CSS
  }

  // Imagen inicial
  fondo.style.backgroundImage = `url("${imagenesFondo[index]}")`;

  // Cambiar cada 5 segundos
  setInterval(cambiarFondo, 5000);

  // === MODAL PARA AMPLIAR IMÁGENES ===
  const modal = document.getElementById('modal');
  const imagenAmpliada = document.getElementById('imagenAmpliada');

  // Función global para que pueda llamarse desde HTML
  window.ampliarImagen = function (imagen) {
    imagenAmpliada.src = imagen.src;
    modal.style.display = 'flex';
  };

  // Cerrar al hacer clic fuera de la imagen
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
    imagenAmpliada.src = '';
  });
});
