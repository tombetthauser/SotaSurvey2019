import { LINKS, SIDE_NOTES } from "./src/data";
import { RENDER_GRAPHS } from "./src/render";

const state = {
  paletteCount: 3,
  palette: 0,
  currentPage: "introduction",
}

const linkShow = (link) => {
  for (let i = 0; i < LINKS.length; i++) { document.querySelector(`.${LINKS[i]}-div`).style.display = "none" }
  if (link) document.querySelector(`.${link}-div`).style.display = "block";
  document.querySelector(`.main-section-container`).scrollTop = 0;
}

const linkBorderRemove = (link) => {
  if (link) {
    document.querySelectorAll(`.${link}-link`).style.borderBottom = 'none';
  } else {
    let links = document.querySelectorAll(".left-column-li")
    links.forEach(link => {
      link.style.borderBottom = 'none';
    })
  }
}

const linkBorderAdd = (link) => {
  if (link) {
    document.querySelector(`.${link}-link`).style.borderBottom = '1px solid #c4dfff';
  }
}


document.addEventListener('DOMContentLoaded', (_event) => {

  let style = document.querySelector(".mobile-drop-down").style;
  
    document.querySelector(".main-header-nav").addEventListener("click", () => {
      if (style.height === "400px") { style.height = "0px"; style.borderBottom = "none"; } 
      else { style.height = "400px"; style.borderBottom = "1px solid #c4dfff"; }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1000) { style.height = "0px"; style.borderBottom = "none"; }
    });

    for (let i = 0; i < LINKS.length; i++) {
      let links = document.querySelectorAll(`.${LINKS[i]}-link`);
      for (let j = 0; j < links.length; j++) {
        document.querySelectorAll(`.${LINKS[i]}-link`)[j].addEventListener("click", () => {
          linkShow(`${LINKS[i]}`)
          linkBorderRemove();
          linkBorderAdd(LINKS[i])
          style.height = "0px";
          style.borderBottom = "none";
        })
      }
    }

    document.querySelectorAll(".switch-colors-link").forEach(ele => {
      ele.addEventListener("click", () => {
        state.palette = (state.palette + 1) % state.paletteCount;
        alert(document.querySelector("body").style.display)
        document.querySelector(".color-palette-css").href = `./styles/layout${state.palette}.css`;
      })
    })

    linkBorderRemove();
    linkShow(`introduction`);
    linkBorderAdd(`introduction`);

    RENDER_GRAPHS();
})

//  npx webpack app.js --watch