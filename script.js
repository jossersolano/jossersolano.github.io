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
