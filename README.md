# Content
- JavaScript notes
- whoIsPaying
- fizzBuzzV1.0
- fizzBuzzV2.0 (while loop)
- fizzBuzzV3.0 (for loop)


# JavaScript notes

keywords (reserved words with set purpose like a command)
e.g. alert, prompt, var

## Data Types
- String
- Number
- Boolean

## Keyword
- var <name> = <value>
  - example var yourName = prompt("What is your name?");
- return <output-of-function>
  - return statement to be used in a function

## Common methods
- alert()
- console.log()
- prompt()
- .length
- .slice
  - .slice(<from-position>,<to-position-not-including>)
- .toUpperCase()
- Math.floor()
  - round down number
- Math.random()
  - random up to 16 decimal places between 0-0.9999999999999999

## Programming maths exceptions
- increment expression
  - x = x + 1 >> x++
  - x +=y >> x+y
- decrement expression
 - x = x - 1 >> x--
 - x +=y >> x-y
- +=var also work with division and multiplication
- note
  - if x = 2 and y = x++, then y would still be = 2 as y is assigned before x was incremented

## Functions
- Creating the Function
  - function test() {contents}
- Calling the function
  - test();
- Use return to feedback an output from a function

## Comparatives
- === Is equal to (also checks data types)
- == Is equal to (ignore data type check)
- !== Is not equal to
- > Is greater than
- < Is less than
- >= Is greater than or equal to
- <= Is less than or equal to
- && AND
- || OR
- ! NOT

## Array
- var list = [0,1,2,]
- list.include(1)
  - checks the if the value 1 exist in the list
- list.push(2)
  - appends the list with the value 2
- list.pop
  - remove last item from the list

## While Loop
- runs while a condition is true
- while(condition){}
- i++ as incremental
- don't use i=i++. output is either 0 or infinite loop.

## For Loop
- setting start condition, end condition and rate of change. i.e. iterating and setting amount of times to run
- for(start;end;change){}
