import FizzBuzz from "./FizzBuzz.js";

const fizzbuzzInput = document.querySelector("#fizzbuzz-numero");
const fizzbuzzButton = document.querySelector("#fizzbuzz-button");
const fizzbuzzDiv = document.querySelector("#fizzbuzz-resultado");


fizzbuzzButton.addEventListener("click", () => {
  const n = Number.parseInt(fizzbuzzInput.value);
  fizzbuzzDiv.innerHTML = "<p>" + FizzBuzz(n) + "</p>";
});
