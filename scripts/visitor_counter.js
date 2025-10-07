async function updateVisitCounter() {
  const pagePath = window.location.pathname.replace(/\//g, '_'); // Ejemplo: "_writeups_OhSINT_index.html"
  const counterElement = document.getElementById('visit-counter');
  try {
    const response = await fetch(`https://api.countapi.xyz/hit/https://rofkehm.github.io//${pagePath}`);
    const data = await response.json();

    counterElement.textContent = `Visitas: ${data.value}`;
    counterElement.style.color = '#00ff00';
    counterElement.style.fontFamily = "'Courier New', Courier, monospace";
    counterElement.style.textAlign = 'center';
    counterElement.style.marginTop = '15px';
    counterElement.style.textShadow = '0 0 0.625rem #00ff00';
    // Opcional: Animación glitch
    counterElement.classList.add('glitch');
  } catch (error) {
    console.error('Error al actualizar contador:', error);
    counterElement.textContent = 'Visitas: Error';
  }
}

document.addEventListener('DOMContentLoaded', updateVisitCounter);