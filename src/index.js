import "./style.css";
import homepage from "./pages/homepage";
import menu from "./pages/menu";
import about from "./pages/about";
import init from "./functions/innit";
import eraseDom from "./functions/eraseDom";

init();

function webPage() {
  let container = document.querySelector("#content");
  return container;
}

const homeBtn = document.querySelector(".links li:nth-child(1)");
const menuBtn = document.querySelector(".links li:nth-child(2)");
const aboutBtn = document.querySelector(".links li:nth-child(3)");

const links = document.querySelectorAll(".links li");
links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
  });
});

homeBtn.addEventListener("click", () => {
  eraseDom();
  webPage().appendChild(homepage());
});

menuBtn.addEventListener("click", () => {
  eraseDom();
  webPage().appendChild(menu());
});

aboutBtn.addEventListener("click", () => {
  eraseDom();
  webPage().appendChild(about());
});
