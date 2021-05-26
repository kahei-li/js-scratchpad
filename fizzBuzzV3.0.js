var min = 0;
var message = "";

function fizzBuzz(){
  for(var count = 100;count >= min;count--){
    if (count%5 === 0 && count%3 === 0){
      message="[" + count + "]FizzBuzz";
    } else if (count%5 === 0){
      message="[" + count + "]Buzz";
    } else if (count%3 === 0){
      message="[" + count + "]Fizz";
    } else {
      message="[" + count + "]...";
    }
    console.log(message);
  }
}

fizzBuzz();

