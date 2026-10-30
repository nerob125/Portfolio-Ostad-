const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");

function setMenu(open) {
  menu.classList.toggle("hidden", !open);
  iconOpen.classList.toggle("hidden", open);
  iconClose.classList.toggle("hidden", !open);
  btn.setAttribute("aria-expanded", String(open));
  btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
btn.addEventListener("click", () => setMenu(menu.classList.contains("hidden")));
menu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.getElementById("year").textContent = new Date().getFullYear();
