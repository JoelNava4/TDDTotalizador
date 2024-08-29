import { calcularPrecioNeto } from "./calcularPrecio";

const items = document.querySelector("#items-numero");
const form = document.querySelector("#calcularPrecio-form");
const divnumItems = document.querySelector("#numItems-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numItems = Number.parseInt(items.value);

  divnumItems.innerHTML = "<p> Numero de Items: " + calcularPrecioNeto(numItems) + "</p>";
});
