const portal = document.querySelector('.portal');
const overlay = document.querySelector('.overlay');

portal.addEventListener('click', () => {
  // Portalın merkezine zoom
  portal.style.transform = 'translate(-50%, -50%) scale(50)';

  // Ekranı karart
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 1500);

  // Yönlendirme
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 3000);
});