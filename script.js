// funcion elaborada con ayuda de copilot
function includeHTML() {
  const elemento = document.querySelectorAll('[data-include]');
  elemento.forEach(el => {
    const archivoHTML = el.getAttribute('data-include');
    fetch(archivoHTML)
      .then(res => res.text())
      .then(data => el.innerHTML = data);
  });
}
window.onload = includeHTML;


// funcion por copilot para resaltar la pestaña activa
// const tabs = document.querySelectorAll('.tab');
// tabs.forEach(tab => {
//   if (tab.href === window.location.href) {
//     tab.classList.add('active');
//   }
// });

document.querySelectorAll('.tab').forEach(tab => {
  if (tab.href === window.location.href) {
    tab.classList.add('active');
  }
});


// Ajustar el padding-top de la barra lateral según la altura de la navegación
window.addEventListener('DOMContentLoaded', () => {
  const navegacion = document.querySelector('.navegacion');
  const barraLateral = document.querySelector('.barra-lateral');

  if (navegacion && barraLateral) {
    const altura = navegacion.offsetHeight;
    barraLateral.style.paddingTop = `${altura}px`;
  }
});




