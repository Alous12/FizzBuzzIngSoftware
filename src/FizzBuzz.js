function FizzBuzz(n) {
  if(n%3 === 0 && n%5 === 0)
  {
    return "FizzBuzz";
  }
  else
  {
    //Multiplo de 3
    if(n%3 === 0)
    {
      return "Fizz";
    }
    //Multiplo de 5
    if(n%5 === 0)
    {
      return "Buzz";
    }
  }
  return n +"";
}

export default FizzBuzz;
