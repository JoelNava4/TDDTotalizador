import { calcularPrecioNeto } from "./calcularPrecio";

describe("Calcular Precio Final De Una Compra", () => {
  it("deberia generar la cantidad de items", () => {
    expect(calcularPrecioNeto(5)).toEqual("5");
  });
});