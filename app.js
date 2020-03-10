const LINKS = [
  "introduction",
  "demographics",
  "connections",
  "conclusions"
]

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

  const linkShow = (link) => {
    for (let i = 0; i < LINKS.length; i++) {
      document.querySelector(`.${LINKS[i]}-div`).style.display = "none";
    }
    document.querySelector(`.${link}-div`).style.display = "block";
  }

  for (let i = 0; i < LINKS.length; i++) {
    let links = document.querySelectorAll(`.${LINKS[i]}-link`);
    for (let j = 0; j < links.length; j++) {
      document.querySelectorAll(`.${LINKS[i]}-link`)[j].addEventListener("click", () => {
        linkShow(`${LINKS[i]}`)
      })
    }
  }
})