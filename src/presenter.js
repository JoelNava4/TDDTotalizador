import { devolverItems,devolverPrecioxItems,devolverEstado } from "./calcularPrecio";

const items = document.querySelector("#items-numero");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado-cliente")
const form = document.querySelector("#calcularPrecio-form");
const divnumItems = document.querySelector("#numItems-div");
const divprecioXItem = document.querySelector("#preciItem-div")
const divestadoCliente = document.querySelector("#estado-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numItems = Number.parseInt(items.value);
  const precioXItem = Number.parseInt(precio.value);
  const estadoCliente = estado.value

  divnumItems.innerHTML = "<p> Numero de Items: " + devolverItems(numItems) + "</p>";
  divprecioXItem.innerHTML = "<p> Precio por Item: " + devolverPrecioxItems(precioXItem) + "</p>";
  divestadoCliente.innerHTML = "<p> Codigo de Estado: " + devolverEstado(estadoCliente) + "</p>";
});
