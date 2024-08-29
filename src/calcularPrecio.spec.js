import { devolverItems,devolverPrecioxItems,devolverEstado,devolverPrecioNeto } from "./calcularPrecio";

describe("Calcular Precio Final De Una Compra", () => {
  it("deberia generar la cantidad de items", () => {
    expect(devolverItems(5)).toEqual(5);
  });

  it("deberia generar el precio x item", () => {
    expect(devolverPrecioxItems(3)).toEqual(3);
  });

  it("deberia generar el estado del cliente", () => {
    expect(devolverEstado("CA")).toEqual("CA");
  });

  it("deberia generar precio Neto", () => {
    expect(devolverPrecioNeto(20,3)).toEqual(60);
  });  

});