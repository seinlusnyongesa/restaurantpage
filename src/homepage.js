function hero() {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const heroBtn = document.createElement("button");
  heroBtn.innerText = "explore the menu";

  hero.appendChild(heroBtn);

  return hero;
}

function description() {
  const desc = document.createElement("div");
  desc.classList.add("description");
  const h2 = document.createElement("h2");
  h2.innerText = "let there be order";

  let p = document.createElement("p");
  p.innerText =
    "Founded in Montreal in 1992, Bâton Rouge is celebrating its 30th anniversary and becoming Bâton Rouge Grillhouse & Bar. For 30 years, Bâton Rouge has been serving quality, fire-grilled food and delivering an unmatched experience with attentive and friendly service. Today, twenty-eight Bâton Rouge franchises bring their passion, masterful grill skills, and quality food to each of its locations in Quebec, Ontario, and Nova Scotia.";

  desc.appendChild(h2);
  desc.appendChild(p);
  return desc;
}

module.exports = {
  hero,
  description,
};
