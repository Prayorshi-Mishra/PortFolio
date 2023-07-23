let MenuBtn = document.querySelector("#MenuBtn");
let Header = document.querySelector("header");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Header.classList.toggle("active");
};

window.onscroll = () => {
  MenuBtn.classList.remove("fa-times");
  Header.classList.remove("active");
};
