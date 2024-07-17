/**
 *
 * INSERTION SORT
 *
 * -> Builds up the sort by gradually creating a larger
 * --> left half which is always sorted
 *
 *
 * PseudoCode -
 *  Start by picking the second element in the array
 *      Now compare the second element with the one before
 *      it and swap if necessary.
 *          Continue to the next element and if it is in the incorrect
 *          order, iterate through the sorted portion(left side) to
 *          place the element in the correct place
 *              Repeat until the array is sorted
 *
 *
 */


function InsertionSort(arr){

    for (let i = 1; i < arr.length ; i++) {
        let temp = arr[i];
        let j = i - 1;

        while (j >= 0 && temp < arr[j]){
            arr[j+1] = arr[j]
            j--;
        }

        arr[j+1] = temp; // j + 1 since at the end of the iteration we subtracted 1;

    }
    return arr;
}

let arr = [2, 43, 15, 6, 1]

console.log("Before Using In sort " +  arr)

console.log("After : " + InsertionSort(arr) )