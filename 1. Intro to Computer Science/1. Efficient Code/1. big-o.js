/**
 * Write a function that prints every even number of a list of numbers
 * O(N)
 */
 function print_even_numbers() {}

 /**
  * Look at the functions below, what is the time complexity?
  */
 // 1. Even or odd
 
 function isEven(value) {}
 
 // 2. Are You Here?
 // Zitten alle items van array 1 in array 2?
 
 function areYouHere(arr1, arr2) {
   const found = arr1.every((item1) => arr2.includes(item1));
   return found;
 }
 
 console.log(areYouHere([2, 1], [2, 4, 7, 8, 1]));
 
 // 3. Doubler
 
 function doubler(arr) {
   return arr.map((arr) => arr * 2);
 }
 
 console.log(doubler([1, 2, 4, 7]));
 
 // 4. Naive Search
 // return index of item in array
 
 function naiveSearch(array, item) {
   return array.indexOf(item);
 }
 
 console.log(naiveSearch(["uno", "dos", "tres", 7], 7));
 
 // 5. Creating Pairs
 // log elke mogelijke combo van items
 
 function pairs(arr1, arr2) {
   for (let i = 0; i < arr1.length; i++) {
     const itemFromArray1 = arr1[i];
     for (let j = 0; j < arr2.length; j++) {
       const itemFromArray2 = arr2[j];
       console.log(`${itemFromArray1}-${itemFromArray2}`);
     }
   }
 }
 
 console.log(pairs([1, 4, 5, 7], [4, 2, 7]));
 
 // 6. Computing Fibonacci Numbers
 
 function generateFib(num) {}
 
 // 7. Efficient Search
 
 function efficientSearch(array, item) {}
 
 // 8. Random element
 // log een random element
 
 function random(arr) {
   return arr[Math.floor(Math.random(arr) * arr.length)];
 }
 
 console.log(random([1, 4, 5, 7]));
 
 // 9. Is It Prime?
 
 function isPrime(n) {}
 
 // 10. Factorial of a number w/ recursion
 
 function factorialOf(n) {}
 