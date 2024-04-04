const logoDark = new URL("../images/dark.svg", import.meta.url);
const logoLight = new URL("../images/light.svg", import.meta.url);

const buttonTheme = document.querySelector(".theme-menu__button");

function changeTheme(theme) {
  document.documentElement.className = "";
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem("theme", theme);
}

(function initTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    changeTheme(theme);
    buttonTheme.setAttribute("data-theme", theme);
  }
})();

buttonTheme.addEventListener("click", (evt) => {
  if (evt.target.getAttribute("data-theme") === "dark") {
    changeTheme("light");
    evt.target.setAttribute("data-theme", "light");
  } else {
    changeTheme("dark");
    evt.target.setAttribute("data-theme", "dark");
  }
});

export {};
