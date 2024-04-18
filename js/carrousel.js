(function () {
  //   console.log("début du carrousel");
  let carrousel = document.querySelector(".carrousel");
  //   console.log("carrousel" + carrousel.tagName);
  let bouton = document.querySelector(".bouton__ouvrir");
  let carrousel__x = document.querySelector(".carrousel__x");

  let galerie = document.querySelector(".galerie");
  //   let galerie__img = galerie.querySelector("img"); // première image seulement

  let carrousel__figure = document.querySelector(".carrousel__figure");

  let galerie__img = document.querySelectorAll("img"); // la collection des images de la galerie

  for (const elm of galerie__img) {
    let carrousel__img = document.createElement("img");
    carrousel__img.classList.add("carrousel__img");
    console.log(elm.src);
    carrousel__img.src = elm.src;
    console.log(carrousel__img.src);
    carrousel__figure.appendChild(carrousel__img);
  }

  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
  });

  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });
})();
