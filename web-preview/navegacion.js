/* Navegación local: abre los apartados desplegables al seguir enlaces internos. Sin red ni telemetría. */
(() => {
  function mostrarApartado(fragmento) {
    if (!fragmento || fragmento === "#") return;
    let id;
    try { id = decodeURIComponent(fragmento.slice(1)); } catch { return; }
    let elemento = document.getElementById(id);
    if (!elemento) return;
    while (elemento) {
      if (elemento.tagName === "DETAILS") elemento.open = true;
      elemento = elemento.parentElement;
    }
  }

  document.addEventListener("click", (evento) => {
    if (!(evento.target instanceof Element)) return;
    const enlace = evento.target.closest('a[href^="#"]');
    if (!enlace) return;
    mostrarApartado(enlace.getAttribute("href"));
  });

  window.addEventListener("hashchange", () => mostrarApartado(window.location.hash));
  mostrarApartado(window.location.hash);
})();
