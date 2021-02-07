const component = document.querySelector("[data-theme]");

component.addEventListener("click", (el) => {
  component.setAttribute("data-theme", `color-${Math.ceil(Math.random() * 3)}`);
});
