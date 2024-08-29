import { calcularPrecioNeto } from "./calcularPrecio";

const items = document.querySelector("#items-numero");
const form = document.querySelector("#calcularPrecio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numItems = Number.parseInt(items.value);

  div.innerHTML = "<p>" + calcularPrecioNeto(numItems) + "</p>";
});
