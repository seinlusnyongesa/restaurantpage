import "./style.css";
import nav from "./nav";
import about from "./about";
import { description, hero } from "./homepage";
import menu from "./menu";
function webpage() {
  const container = document.querySelector("#content");

  container.appendChild(nav());
  // container.appendChild(hero());
  // container.appendChild(description());

  container.appendChild(menu());

  return container;
}

webpage();
