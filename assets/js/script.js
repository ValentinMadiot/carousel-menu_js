"use strict";
/* ---------- 1. Static data ---------- */
const menu = [
  {
    id: 1,
    title: "Bouchées à la Reine",
    category: "Entrées",
    price: 8.49,
    img: "../assets/img/entree-1.jpg",
    desc: "Feuilletés croustillants garnis d'une sauce onctueuse au poulet, champignons et crème.",
  },
  {
    id: 2,
    title: "Figues au Chèvre",
    category: "Entrées",
    price: 9.99,
    img: "../assets/img/entree-2.jpg",
    desc: "Figues tièdes, fromage de chèvre fondant, jeunes pousses, noix et vinaigrette au miel.",
  },
  {
    id: 3,
    title: "Coquilles St‑Jacques",
    category: "Entrées",
    price: 11.99,
    img: "../assets/img/entree-3.jpg",
    desc: "Noix de Saint‑Jacques poêlées, servies dans leur coquille avec une sauce au vin blanc et échalotes.",
  },
  {
    id: 4,
    title: "Terrine de campagne",
    category: "Entrées",
    price: 7.99,
    img: "../assets/img/entree-4.jpg",
    desc: "Pâté rustique fait maison, servi avec cornichons et pain de campagne grillé.",
  },
  {
    id: 5,
    title: "Tartare de saumon",
    category: "Entrées",
    price: 10.99,
    img: "../assets/img/entree-5.jpg",
    desc: "Dés de saumon frais marinés, relevés d’herbes fraîches, câpres et zestes d’agrumes.",
  },
  {
    id: 6,
    title: "Velouté de potiron",
    category: "Entrées",
    price: 6.99,
    img: "../assets/img/entree-6.jpg",
    desc: "Soupe douce et onctueuse de courge, relevée par une touche de crème et d'épices.",
  },

  {
    id: 7,
    title: "Œufs bénédicte",
    category: "Plats",
    price: 13.49,
    img: "../assets/img/plat-1.jpg",
    desc: "Œufs pochés sur pain brioché, asperges croquantes, sauce hollandaise maison.",
  },
  {
    id: 8,
    title: "Crêpe jambon beurre",
    category: "Plats",
    price: 11.99,
    img: "../assets/img/plat-2.jpg",
    desc: "Galette de sarrasin garnie de jambon truffé, emmental et œuf mollet.",
  },
  {
    id: 9,
    title: "Tartiflette savoyarde",
    category: "Plats",
    price: 14.99,
    img: "../assets/img/plat-3.jpg",
    desc: "Pommes de terre, lardons fumés, oignons fondants et reblochon coulant.",
  },
  {
    id: 10,
    title: "Moules marinières",
    category: "Plats",
    price: 12.99,
    img: "../assets/img/plat-4.jpg",
    desc: "Moules marinières à la crème et au vin blanc servies avec frites croustillantes maison et persillade.",
  },
  {
    id: 11,
    title: "Ratatouille provençale",
    category: "Plats",
    price: 11.99,
    img: "../assets/img/plat-5.jpg",
    desc: "Mijoté de légumes du soleil servi avec quinoa aux herbes.",
  },
  {
    id: 12,
    title: "Pièce de bœuf",
    category: "Plats",
    price: 16.99,
    img: "../assets/img/plat-6.jpg",
    desc: "Viande tendre à point, accompagnée d’une purée de pommes de terre au beurre demi-sel.",
  },

  {
    id: 13,
    title: "Fondant au chocolat",
    category: "Desserts",
    price: 6.99,
    img: "../assets/img/dessert-1.jpg",
    desc: "Gâteau au chocolat noir intense, cœur fondant, servi tiède avec crème anglaise.",
  },
  {
    id: 14,
    title: "Crumble au pomme",
    category: "Desserts",
    price: 5.99,
    img: "../assets/img/dessert-2.jpg",
    desc: "Pommes fondantes et rhubarbe acidulée sous une pâte sablée croustillante.",
  },
  {
    id: 15,
    title: "Fraisier traditionnel",
    category: "Desserts",
    price: 6.99,
    img: "../assets/img/dessert-3.jpg",
    desc: "Biscuit génoise, fraises fraîches et crème légère à la vanille.",
  },
  {
    id: 16,
    title: "Crème chocolat noir",
    category: "Desserts",
    price: 5.99,
    img: "../assets/img/dessert-4.jpg",
    desc: "Servie en verrine avec éclats de fèves de cacao.",
  },
  {
    id: 17,
    title: "Crème brûlée vanille",
    category: "Desserts",
    price: 5.99,
    img: "../assets/img/dessert-5.jpg",
    desc: "Dessert classique à la croûte caramélisée et parfum subtil de vanille.",
  },
  {
    id: 18,
    title: "Glace artisanale vanille",
    category: "Desserts",
    price: 4.99,
    img: "../assets/img/dessert-6.jpg",
    desc: "2 boules, servies avec chantilly maison et éclats de biscuit.",
  },
];

/* ---------- 2. DOM cache ---------- */
const sectionCenter = document.querySelector(".menu__container");
const btnContainer = document.querySelector(".menu__btn");

/* ---------- 3. Render functions ---------- */
function displayMenu(items = []) {
  sectionCenter.innerHTML = items
    .map(
      (item) => `
       <article class="menu__item">
         <img src="${item.img}" alt="${item.title}" class="menu__photo" />
         <div class="menu__info">
           <header>
             <h4>${item.title}</h4>
             <h4 class="menu__price">${item.price.toFixed(2)} €</h4>
           </header>
           <p class="menu__desc">${item.desc}</p>
         </div>
       </article>
     `
    )
    .join("");
}

function displayBtnFilter() {
  const categories = menu.reduce(
    (acc, { category }) => {
      if (!acc.includes(category)) acc.push(category);
      return acc;
    },
    ["tout"]
  );

  // Insérer les boutons dans le DOM
  btnContainer.innerHTML = categories
    .map(
      (cat) => `
       <button type="button" class="menu__btn-filter" data-id="${cat}">${cat}</button>
     `
    )
    .join("");

  // Sélectionner à nouveau (nécessaire car injecté dynamiquement)
  const filterBtns = btnContainer.querySelectorAll(".menu__btn-filter");

  // Attacher la logique de filtrage
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;

      /* 1. Met à jour l’état actif */
      filterBtns.forEach((b) => b.classList.remove("active")); // retire partout
      e.currentTarget.classList.add("active"); // ajoute sur le bouton cliqué

      /* 2. Filtre l’affichage */
      const itemsToShow =
        category === "tout"
          ? menu
          : menu.filter((item) => item.category === category);

      displayMenu(itemsToShow);
    });
  });

  /* 3. Sélection par défaut au chargement (optionnel) */
  filterBtns[0].classList.add("active"); // « tout » actif au départ
}

/* ---------- 4. Init ---------- */
window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu); // Affiche tout au chargement
  displayBtnFilter(); // Construit les boutons
});
