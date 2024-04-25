(function () {
  // console.log("début du carrousel");
  let carrousel = document.querySelector(".carrousel");
  // console.log("carrousel" + carrousel.tagName);
  let bouton = document.querySelector(".bouton__ouvrir");
  let carrousel__x = document.querySelector(".carrousel__x");
  let galerie = document.querySelector(".galerie");
  // let galerie__img = galerie.querySelector("img"); // première image seulement
  let carrousel__figure = document.querySelector(".carrousel__figure");
  let galerie__img = galerie.querySelectorAll("img"); // la collection des images de la galerie

  let index = 0;
  for (const elm of galerie__img) {
    creer_image_carrousel(index, elm);
    creer_radio_carrousel(index);

    index = index + 1;
  }

  /**
   * Créer une image du carrousel à partir d'une image de la galerie
   * @param {*} index numéro de l'image
   * @param {*} elm image de la galerie
   */
  function creer_image_carrousel(index, elm) {
    let carrousel__img = document.createElement("img");
    carrousel__img.classList.add("carrousel__img");
    carrousel__img.dataset.index = index;
    console.log(elm.src);
    carrousel__img.src = elm.src;
    console.log(carrousel__img.src);
    carrousel__figure.appendChild(carrousel__img);
  }

  /**
   * Créer les radios boutons de navigation dans le carrousel
   * @param {*} index numéro du radio bouton
   */
  function creer_radio_carrousel(index) {
    // Créer input
    let carrousel__radio = document.createElement("input");
    // Modifier type = radio
    carrousel__radio.type = "radio";
    // Modifier l'attribut name
    carrousel__radio.name = "carrousel_radio";
    // Modifier l'index
    carrousel__radio.dataset.index = index;
    // Écouteur de l'événement change
    carrousel__radio.addEventListener("change", function () {
      // Réinitialiser l'opacité de toutes les images
      let images = document.querySelectorAll(".carrousel__img");
      // Initialiser le style.opacity=0 pour l'ensemble des images
      images.forEach((img) => (img.style.opacity = 0));

      // Sélectionner et afficher l'image correspondante
      let selectedImg = document.querySelector(
        `.carrousel__img[data-index="${index}"]`
      );
      // Initialise l'image sélectionnée à style.opacity=1
      if (selectedImg) selectedImg.style.opacity = 1;
    });

    // Ajouter le radio au formulaire
    let carrousel__form = document.querySelector(".carrousel__form");
    carrousel__form.appendChild(carrousel__radio);
  }

  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
  });

  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });
})();
