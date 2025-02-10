// 1. Write a function that takes an input of item prices and returns the total bill.

function calculateTotalBill(prices) {
    return prices.reduce((total, price) => total + price, 0);
  }




// 2.	Convert Temperature (Celsius to Fahrenheit).

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}




// 3.	Find the Largest Number in an Array.

function findLargestNumber(arr) {
  let largest = arr[0];  

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];  
    }
  }

  return largest;
}





// 9.	Write a JavaScript function that checks whether a number is prime.

function isPrime(num) {
  if (num <= 1) return false; // Numbers less than 2 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true; 
}





// 10.	Write a program to print pattern.

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
      let line = "";
      for (let j = 1; j <= i; j++) {
          line += j + " ";
      }
      console.log(line.trim());
  }
}





// 11.	Write a function that assigns grades based on marks using nested if-else.

function assignGrade(marks) {

  if (marks >= 90) {
    grade = 'A';
  } else {
    if (marks >= 80) {
      grade = 'B';
    } else {
      if (marks >= 70) {
        grade = 'C';
      } else {
        if (marks >= 60) {
          grade = 'D';
        } else {
          grade = 'Fail';
        }
      }
    }
  }
  return grade;
       }
