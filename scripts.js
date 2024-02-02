const overlays = document.querySelectorAll('.overlay');

overlays.forEach(overlay => {
  const text = overlay.querySelector('p');
  const height = text.offsetHeight;
  text.style.transform = `translateY(${height}px)`;
  
  overlay.addEventListener('mouseenter', () => {
    text.style.transform = `translateY(0)`;
  });
  
  overlay.addEventListener('mouseleave', () => {
    text.style.transform = `translateY(${height}px)`;
  });
});