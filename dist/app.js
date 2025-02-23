const meun = document.querySelector(".meun");
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const list = document.querySelectorAll(".list-item");

function toggleMenu() {
  meun.classList.toggle("show");
open.classList.toggle("notShowMenu");
close.classList.toggle("notShowMenu");
}
const icon = [open,close];
icon.forEach((el) => el.addEventListener("click", toggleMenu)
);