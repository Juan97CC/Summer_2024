/**
 * VISUALGO.NET
 * Bubble Sort -> A sorting algorithm where the largest values bubble
 *                up to the top.
 *
 *                Time Complexity Big O -> n^2
 *
 *
 *
 *                ** IN A SCENARIO WHERE THE ARRAY IS ALMOST SORTED
 *                -> Optimize the algorithm so it breaks out
 *                -> Instead of wasting time.
 *
 * Pseudocode
 * - Start looping from the end with a variable called i, the end
 *   of the array towards the beginning.
 *
 * - Start an inner loop with a variable called j from the begging
 *   until (i - 1).
 *
 * - If arr[j] is greater than arr[j+1], swap those two values.
 *
 * - Return the sorted array.
 */


function bubbleSort(arr){

    //Optimized
    let noSwap;

    for (let i = arr.length; i > 0 ; i--) { // Start from the end & decrement to optimize
        // you don't want it looping through whats all ready sorted.

        //Optimized
        noSwap = true;

        for (let j = 0; j < i - 1 ; j++) {
            if (arr[j] > arr[j + 1]){
                //SWAP
                let temp = arr[j+ 1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                //Optimized
                noSwap = false;
            }

        }
        //Optimized
        if(noSwap) break;

    }

    return arr;
}

let arr1 = [2, 4, 5, 1, 88, 34, 6]
console.log("Before Using Bubble Sort: " + arr1)


console.log("After Using bubble sort: ")
let sortedArr = bubbleSort(arr1)
console.log(sortedArr.toString())
