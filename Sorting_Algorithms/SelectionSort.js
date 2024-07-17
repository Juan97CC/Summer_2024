/**
 * Selection Sort - Similar to bubble sort, but instead of first
 *                  placing large values into sorted position(aka bubbling),
 *                  it places small values into sorted position
 *
 *                  FIND THE MINIMUM(STORE THE POSITION)
 *                  SWAP AT THE END.
 *
 * Time Complexity : Big O n^2
 * - Good if you want to minimize swaps
 *
 * Doesn't perform well Best is still O(n^2)
 */


function selectionSort(arr) {

    //Remember(arr.length - 1) saves one iteration which you dont need! *since j = i + 1*
    for (let i = 0; i < arr.length - 1; i++) {
        let smallestPosition = i;
        //console.log(smallestPosition)


        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestPosition] > arr[j]) {
                smallestPosition = j;
            }
            let temp = arr[i];
            arr[i] = arr[smallestPosition];
            arr[smallestPosition] = temp;



        }
        console.log(arr)


    }
    return arr;
}
let arr = [2, 43, 15, 6, 1]

console.log("Before Using Selection sort " +  arr)

console.log("After : " + selectionSort(arr) )