var prime=function (n) {
    

// 0 and 1 are not prime numbers
  // change flag to 1 for non-prime number
 var flag=0
  if (n == 0 || n == 1) {
    flag=1
 }
  
  for (i = 2; i <= n / 2; ++i) {

    // if n is divisible by i, then n is not prime
    // change flag to 1 for non-prime number
    if (n % i == 0) {
      flag = 1;
      break;
    }
  }

  // flag is 0 for prime numbers
  if (flag == 0){

      console.log(`${n} is an prime number`);
  }
  else{

      
    console.log(`${n} is not an  prime number`);

  }

  return 0;

}
prime(11);
prime(21);