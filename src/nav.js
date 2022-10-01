module.exports = function nav() {
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  ul.classList.add("links");
  let li1 = document.createElement("li");
  let lispan1 = document.createElement("span");
  lispan1.innerText = "home";
  li1.appendChild(lispan1);
  ul.appendChild(li1);

  let li2 = document.createElement("li");
  let lispan2 = document.createElement("span");
  lispan2.innerText = "menu";
  li2.appendChild(lispan2);
  ul.appendChild(li2);

  let li3 = document.createElement("li");
  let lispan3 = document.createElement("span");
  lispan3.innerText = "about";
  li3.appendChild(lispan3);
  ul.appendChild(li3);

  // li1.innerHTML = <span>home</span>;
  // li2.innerHTML = <span>menu</span>;
  // li3.innerHTML = <span>about</span>;

  nav.appendChild(ul);
  return nav;
};
