function updateVisitCounter() {
  const pagePath = window.location.pathname.replace(/\//g, '_') || 'index'; // Ejemplo: "_writeups_OhSINT_index.html"
  const counterElement = document.getElementById('visit-counter');
  if (!counterElement) {
    console.error('Elemento #visit-counter no encontrado');
    return;
  }

  console.log('Iniciando contador para página:', pagePath); // Depuración

  // Cargar la librería de CounterAPI
  const script = document.createElement('script');
  script.src = 'https://counterapi.com/c.js?ns=voodooos';
  script.async = true;
  script.onload = function() {
    const counterDiv = document.createElement('div');
    counterDiv.className = 'counterapi';
    counterDiv.style.minHeight = '44px';
    counterDiv.style.color = '#00ff00';
    counterDiv.style.fontFamily = "'Courier New', Courier, monospace";
    counterDiv.style.textAlign = 'center';
    counterDiv.style.marginTop = '15px';
    counterDiv.style.textShadow = '0 0 0.625rem #00ff00';

    counterDiv.setAttribute('behavior', 'view');
    counterDiv.setAttribute('label', 'Visitas');
    counterDiv.setAttribute('abbreviate', 'true');
    counterDiv.setAttribute('noIcon', 'true');
    counterDiv.setAttribute('noCss', 'true');
    counterDiv.setAttribute('key', pagePath); // Contador por página

    counterElement.appendChild(counterDiv);
  };
  script.onerror = function() {
    console.error('Error al cargar la librería de CounterAPI');
    counterElement.textContent = 'Visitas: Error';
  };

  document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', updateVisitCounter);