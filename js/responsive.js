const menuResponsive = document.querySelector(".nav-responsivo");
const btnResponsive = document
  .querySelector(".responsivo-btn")
  .addEventListener("click", showResponsiveMenu);

let displayResponsive = false;

function showResponsiveMenu() {
  displayResponsive = !displayResponsive;
  if (displayResponsive) {
    menuResponsive.style.display = 'flex';
  }

  if (!displayResponsive) {
    menuResponsive.style.display = 'none';
    console.log("esconde fdp")
  }
}
