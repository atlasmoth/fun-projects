document.querySelectorAll(".closer").forEach((toggler) => {
  toggler.addEventListener("click", (e) => {
    aside.classList.toggle("panout");
  });
});
