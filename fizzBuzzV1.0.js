var output = Math.floor(Math.random()*1000)+1
var message = "";

function fizzBuzz(){
  if (output%5 === 0 && output%3 === 0){
    message="[" + output + "]FizzBuzz";
  } else if (output%5 === 0){
    message="[" + output + "]Buzz";
  } else if (output%3 === 0){
    message="[" + output + "]Fizz";
  } else {
    message="[" + output + "]...";
  }
  
  
  console.log(message)
}

fizzBuzz();
