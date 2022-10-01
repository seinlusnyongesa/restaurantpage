import "./style.css";
import nav from "./nav";
import { description, hero } from "./homepage";
function webpage() {
  const container = document.querySelector("#content");

  container.appendChild(nav());
  container.appendChild(hero());
  container.appendChild(description());

  return container;
}

webpage();
