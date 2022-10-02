import nav from "../nav";
import homepage from "../pages/homepage";

const content = document.querySelector("#content");

function init() {
  content.appendChild(nav());
  content.appendChild(homepage());
  return content;
}

export default init;
