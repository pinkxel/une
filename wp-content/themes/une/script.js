console.log(new ScrollMagic.Controller());

const urlParams = new URLSearchParams(window.location.search);
const mostrar = urlParams.get("mostrar");
console.log(mostrar);

function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  if (mostrar !== null || true) {
    let ocultarItems = document.querySelectorAll(".ocultar");
    ocultarItems.forEach(function (ocultarItem) {
      ocultarItem.classList.remove("ocultar");
    });
  }
});
