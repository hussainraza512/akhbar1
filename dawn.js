console.log("hello")



let bar = document.querySelector(".bar1");
let flood = document.querySelector(".flood");
let flood1 = document.querySelector(".flood1");

const toggleFunction = () => {
  const mediaQuery = window.matchMedia("(max-width: 360px)");

  if (mediaQuery.matches) {
    flood.style.display = "none";
    flood1.style.display = flood1.style.display === "none" ? "block" : "none";
  } else {
    flood1.style.display = "none";
    flood.style.display = flood.style.display === "none" ? "block" : "none";
  }
};

bar.addEventListener("click", toggleFunction);

toggleFunction();
