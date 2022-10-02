const container = document.querySelector("#content");
function eraseDom() {
  while (container.children.length > 1) {
    container.lastChild.remove();
  }
}

export default eraseDom;
