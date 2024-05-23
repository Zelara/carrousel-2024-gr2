(function () {
  if (document.querySelector(".galerie")) {
    let galerie = document.querySelector(".galerie");
    let carrousel = document.querySelector(".carrousel");
    let carrousel__x = document.querySelector(".carrousel__x");
    let carrousel__figure = document.querySelector(".carrousel__figure");
    let galerie__img = galerie.querySelectorAll("img");

    let index = 0;
    for (const elm of galerie__img) {
      creer_image_carrousel(index, elm);
      creer_radio_carrousel(index);
      elm.addEventListener("click", function () {
        ouvrir_carrousel(index);
      });
      index = index + 1;
    }

    function creer_image_carrousel(index, elm) {
      let carrousel__img = document.createElement("img");
      carrousel__img.classList.add("carrousel__img");
      carrousel__img.dataset.index = index;
      carrousel__img.src = elm.src;
      carrousel__figure.appendChild(carrousel__img);
    }

    function creer_radio_carrousel(index) {
      let carrousel__radio = document.createElement("input");
      carrousel__radio.type = "radio";
      carrousel__radio.name = "carrousel_radio";
      carrousel__radio.dataset.index = index;

      carrousel__radio.addEventListener("change", function () {
        let images = document.querySelectorAll(".carrousel__img");
        images.forEach((img) => (img.style.opacity = 0));
        let selectedImg = document.querySelector(
          `.carrousel__img[data-index="${index}"]`
        );
        if (selectedImg) selectedImg.style.opacity = 1;
      });

      let carrousel__form = document.querySelector(".carrousel__form");
      carrousel__form.appendChild(carrousel__radio);
    }

    function ouvrir_carrousel(index) {
      carrousel.classList.add("carrousel--ouvrir");
      document.querySelector(
        `input[name='carrousel_radio'][data-index='${index}']`
      ).checked = true;
      let event = new Event("change");
      document
        .querySelector(`input[name='carrousel_radio'][data-index='${index}']`)
        .dispatchEvent(event);
    }

    // Fermer le carrousel en cliquant en dehors des composants internes spécifiques
    document.addEventListener("mousedown", function (event) {
      // Vérifie si le carrousel est ouvert
      if (carrousel.classList.contains("carrousel--ouvrir")) {
        // Vérifie si le clic n'est pas sur un des éléments internes du carrousel ou sur le carrousel lui-même
        if (!carrousel.contains(event.target)) {
          carrousel.classList.remove("carrousel--ouvrir");
        }
      }
    });

    carrousel__x.addEventListener("mousedown", function () {
      carrousel.classList.remove("carrousel--ouvrir");
    });

    let flecheGauche = document.querySelector(".carrousel__fleche--gauche");
    let flecheDroite = document.querySelector(".carrousel__fleche--droite");

    function changerImage(direction) {
      let currentIndex = parseInt(
        document.querySelector("input[name='carrousel_radio']:checked").dataset
          .index
      );
      let newIndex = currentIndex + direction;

      if (newIndex < 0) {
        newIndex = galerie__img.length - 1;
      } else if (newIndex >= galerie__img.length) {
        newIndex = 0;
      }

      document.querySelector(
        `input[name='carrousel_radio'][data-index='${newIndex}']`
      ).checked = true;
      let event = new Event("change");
      document
        .querySelector(
          `input[name='carrousel_radio'][data-index='${newIndex}']`
        )
        .dispatchEvent(event);
    }

    flecheGauche.addEventListener("click", function () {
      changerImage(-1);
    });

    flecheDroite.addEventListener("click", function () {
      changerImage(1);
    });

    document.querySelector(
      "input[name='carrousel_radio'][data-index='0']"
    ).checked = true;
    let event = new Event("change");
    document
      .querySelector("input[name='carrousel_radio'][data-index='0']")
      .dispatchEvent(event);
  }
})();
