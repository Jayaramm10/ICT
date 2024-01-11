function sumOfSquares(arr) {
    let sum = 0;
  

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] ** 2;
    }
  
    return sum;
  }
  
  
  let myArray = [1, 2, 3, 4, 5];
  let result = sumOfSquares(myArray);
  console.log(`The sum of squares is: ${result}`);  
  