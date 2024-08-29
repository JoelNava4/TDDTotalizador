import { devolverItems,devolverPrecioxItems,devolverEstado,devolverPrecioNeto,devolverImpuesto } from "./calcularPrecio";

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

  it("deberia generar el impuesto de CA", () => {
    expect(devolverImpuesto(20,3,"CA")).toEqual("Impuesto para CA (%6.25): 3.75");
  });  

  it("no deberia generar el impuesto de CA", () => {
    expect(devolverImpuesto(20,3,"UT")).toEqual("El estado aun no tiene impuesto");
  });  

});