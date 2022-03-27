/**
 * Linear vs Binary search using JavaScript
 */


const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 
                  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                  31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                  46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

const unSortedArr = [56, 57, 58, 59, 60, 11, 12, 13, 14, 15, 41, 42, 43, 44, 45, 
                  26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 31, 32, 33, 34, 35,
                  46, 47, 48, 49, 50, 16, 17, 18, 19, 20, 6, 7, 8, 9, 10, 
                  50, 51, 52, 53, 54, 55, 21, 22, 23, 24, 25, 36, 37, 38, 39, 38, 39, 40,];


//Liner brute force method O(n)

const linear = (arr, target) => {
    let steps = 0;

    for(let i = 0; i < arr.length; i++) {
        steps++;

        if (arr[i] === target) {
            return `Found: ${arr[i]} in ${steps} steps`;
        }
    }
}

//change last number in console.log for testing
console.log(linear(sortedArr, 30)); 
console.log(linear(unSortedArr, 40));




/*
*Binary search method 0(logn)
*/

let array =  [2,4, 6, 7, 8, 9, 9, 10 , 13, 14 ,15 , 17, 18, 20, 21, 22, 24, 31, 33, 35, 37, 39, 42, 46, 47, 49, 50];

const binarySearch = (array, start, end, num) => {
    const middle = start + Math.floor((end - start)/2);
        if ( start <= end) { 
            if (array[middle] === num) {
                return middle;
            }

            if (num < array[middle]) {
            return binarySearch(array, start, middle -1, num)
            }

            if (num > array[middle]) {
            return binarySearch(array, middle +1, end, num)
            }
        }

    return -1;     
};

console.log(binarySearch(array, 0, array.length -1 , 4));
console.log(binarySearch(array, 0, array.length -1 , 20));


