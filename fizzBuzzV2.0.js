var count = 1;
var max = 5;
var message = "";

function fizzBuzz(){
  while(count <= max){
    if (count%5 === 0 && count%3 === 0){
      message="[" + count + "]FizzBuzz";
    } else if (count%5 === 0){
      message="[" + count + "]Buzz";
    } else if (count%3 === 0){
      message="[" + count + "]Fizz";
    } else {
      message="[" + count + "]...";
    }

    count++;
		console.log(message)
  }
}

fizzBuzz();

