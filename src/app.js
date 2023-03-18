import "file-loader?name=[name].[ext]!../index.html";
import "../style/index.scss";

window.onload = function() {
  const who = ["Mi perro", "Mi amigo", "Mi gato", "Mi coche", "Mi padre"];
  const what = [
    "estropeó mis deberes",
    "se rompió",
    "se cayó",
    "atropelló al vecino",
    "me arrastró"
  ];
  const where = [
    "en mi casa.",
    "en casa de mis abuelos",
    "en frente del restaurante",
    "en Madrid",
    "en Santiago de Compostela",
    "en el garaje",
    "en la calle principal del pueblo"
  ];

  let frase =
    who[rand(who.length)] +
    " " +
    what[rand(what.length)] +
    " " +
    where[rand(where.length)];

  let excuseSpan = document.querySelector("#excuse");

  excuseSpan.innerHTML = frase;
};

function rand(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}
