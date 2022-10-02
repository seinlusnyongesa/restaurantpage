module.exports = function aboutPage() {
  let div = document.createElement("div");
  div.classList.add("about");
  let aboutH1 = document.createElement("h1");
  aboutH1.innerText = "about us";
  let p = document.createElement("p");
  p.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
  debitis officiis non quia? Ullam quae dolores molestias voluptas eius
  nostrum ex exercitationem non minima nobis, ad, minus veniam,
  molestiae ea! Impedit amet obcaecati voluptates, perferendis nobis
  consequatur expedita rerum. Dolores debitis obcaecati velit quod
  cupiditate esse recusandae delectus, ipsum at.`;

  div.appendChild(aboutH1);
  div.appendChild(p);

  return div;
};
