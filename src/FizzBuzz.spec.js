import FizzBuzz from "./FizzBuzz.js";

describe("Retonarnar numero que no sea ni multiplo de 3 ni de 5", () => {
  it("deberia sumar dos numeros", () => {
    expect(FizzBuzz(1)).toEqual("1");
  });

  it("Dberia retornar Fizz si es 3", () => {
    expect(FizzBuzz(3)).toEqual("Fizz");
  });

  it("Dberia retornar Fizz si es 6 o multiplo de 3", () => {
    expect(FizzBuzz(6)).toEqual("Fizz");
  });

  it("Deberia retornar Buzz si es 5", () => {
    expect(FizzBuzz(5)).toEqual("Buzz");
  });

  it("Deberia retornar Buzz si es 10 o multiplo de 5", () => {
    expect(FizzBuzz(10)).toEqual("Buzz");
  });

});


