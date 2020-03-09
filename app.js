document.addEventListener('DOMContentLoaded', (event) => {
  let style = document.querySelector(".mobile-drop-down").style;
  document.querySelector(".main-header-nav").addEventListener("click", () => {
    if (style.height === "150px") {
      style.height = "0px";
    } else {
      style.height = "150px";
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
      style.height = "0px";
    }
  });
})