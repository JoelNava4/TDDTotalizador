import { devolverItems,devolverPrecioxItems } from "./calcularPrecio";

describe("Calcular Precio Final De Una Compra", () => {
  it("deberia generar la cantidad de items", () => {
    expect(devolverItems(5)).toEqual(5);
  });

  it("deberia generar el precio x item", () => {
    expect(devolverPrecioxItems(3)).toEqual(3);
  });

});