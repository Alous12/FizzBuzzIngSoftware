function FizzBuzz(n) {
  if(n%3 === 0)
  {
    return "Fizz";
  }
  else
  {
    //Multiplo de 5
    if(n%5 === 0)
    {
      return "Buzz";
    }
  }
  return n +"";
}

export default FizzBuzz;
