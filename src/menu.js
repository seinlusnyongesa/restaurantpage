module.exports = function menu() {
  let div = document.createElement("div");
  div.classList.add("menu");
  let menuH1 = document.createElement("h1");
  menuH1.innerText = "our menu";

  let menuList = document.createElement("ul");

  let item1 = document.createElement("li");
  let item1H3 = document.createElement("h3");
  let item1P = document.createElement("p");
  let item1Price = document.createElement("strong");

  item1H3.innerText = "juice";
  item1P.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
  aperiam neque ratione maxime voluptate nobis commodi, maiores ipsa
  perferendis consectetur ab quos quod saepe hic numquam adipisci ad
  vitae harum.`;
  item1Price.innerText = "$30";
  item1.appendChild(item1H3);
  item1.appendChild(item1P);
  item1.appendChild(item1Price);

  let item2 = document.createElement("li");
  let item2H3 = document.createElement("h3");
  let item2P = document.createElement("p");
  let item2Price = document.createElement("strong");

  item2H3.innerText = "pancake";
  item2P.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
  aperiam neque ratione maxime voluptate nobis commodi, maiores ipsa
  perferendis consectetur ab quos quod saepe hic numquam adipisci ad
  vitae harum.`;
  item2Price.innerText = "$15";
  item2.appendChild(item2H3);
  item2.appendChild(item2P);
  item2.appendChild(item2Price);

  let item3 = document.createElement("li");
  let item3H3 = document.createElement("h3");
  let item3P = document.createElement("p");
  let item3Price = document.createElement("strong");

  item3H3.innerText = "coffee";
  item3P.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
  aperiam neque ratione maxime voluptate nobis commodi, maiores ipsa
  perferendis consectetur ab quos quod saepe hic numquam adipisci ad
  vitae harum.`;
  item3Price.innerText = "$5";
  item3.appendChild(item3H3);
  item3.appendChild(item3P);
  item3.appendChild(item3Price);

  menuList.appendChild(item1);
  menuList.appendChild(item2);
  menuList.appendChild(item3);

  div.appendChild(menuH1);
  div.appendChild(menuList);
  return div;
};
