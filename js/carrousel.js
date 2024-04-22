(function () {
  let carrousel = document.querySelector(".carrousel");
  let bouton = document.querySelector(".bouton__ouvrir");
  let carrousel__x = document.querySelector(".carrousel__x");
  let carrousel__figure = document.querySelector(".carrousel__figure");
  let carrousel__form = document.querySelector(".carrousel__form");
  let galerie__img = document.querySelectorAll("img"); // collection des images de la galerie

  // Création des images dans le carrousel
  for (const [index, elm] of galerie__img.entries()) {
    let carrousel__img = document.createElement("img");
    carrousel__img.classList.add("carrousel__img");
    if (index !== 0) carrousel__img.style.opacity = 0; // Toutes les images invisibles sauf la première
    carrousel__img.src = elm.src;
    carrousel__figure.appendChild(carrousel__img);

    // Création des boutons radio correspondants
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carrousel_radio";
    radio.value = index;
    if (index === 0) radio.checked = true;
    carrousel__form.appendChild(radio);

    radio.addEventListener("change", function () {
      document.querySelectorAll(".carrousel__img").forEach((img, idx) => {
        img.style.opacity = idx === index ? 1 : 0; // Changement d'opacité
      });
    });
  }

  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
  });

  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });
})();
