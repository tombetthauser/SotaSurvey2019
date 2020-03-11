import { LINKS } from "./src/data";
import { RENDER_GRAPHS } from "./src/render";

const linkShow = (link) => {
  for (let i = 0; i < LINKS.length; i++) { document.querySelector(`.${LINKS[i]}-div`).style.display = "none" }
  document.querySelector(`.${link}-div`).style.display = "block";
}


document.addEventListener('DOMContentLoaded', (event) => {
  let style = document.querySelector(".mobile-drop-down").style;
  
    document.querySelector(".main-header-nav").addEventListener("click", () => {
      if (style.height === "125px") { style.height = "0px"; style.borderBottom = "none"; } 
      else { style.height = "125px"; style.borderBottom = "1px solid #c4dfff"; }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1000) { style.height = "0px"; style.borderBottom = "none"; }
    });

    for (let i = 0; i < LINKS.length; i++) {
      let links = document.querySelectorAll(`.${LINKS[i]}-link`);
      for (let j = 0; j < links.length; j++) {
        document.querySelectorAll(`.${LINKS[i]}-link`)[j].addEventListener("click", () => { linkShow(`${LINKS[i]}`) })
      }
    }

    RENDER_GRAPHS();
})