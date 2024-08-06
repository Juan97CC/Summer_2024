/**
 * MERGE SORT
 * - It's a combination of 2 things Merging & Sorting
 * - Exploits fact arrays 0 or 1 element are always sorted.
 * - Works by decomposing an array into smaller arrays of 0 or 1 elements,
 *      then building up a newly sorted array
 * -
 *
 *
 * IN order to implement merge sort, it's useful to first implement a function
 *  Responsible for merging 2 Sorted arrays
 *      - Given 2 sorted arrays, this helper function should CREATE
 *        a new array which is also sorted, and consists of all of the elements
 *        in the two input arrays.
 *
 */


/**
 * Explanation:
 Initialization:
 newArray is an empty array where the merged result will be stored.
 i and j are indices to iterate through arr1 and arr2 respectively.

 Main Merge Loop:
 The while loop runs as long as there are elements left in both arr1 and arr2.
 Inside the loop, the elements at the current indices of arr1 and arr2 are compared.
 The smaller element is pushed to newArray, and the index of the corresponding array is incremented.

 Remaining Elements:
 After the main loop, there might be remaining elements in either arr1 or arr2.
 The while loops handle these remaining elements and push them to newArray.
 This function ensures that the merged array is sorted as long as the input arrays are sorted.

 * @param arr1
 * @param arr2
 * @returns {*[]}
 */

function merge(arr1, arr2) {
    let newArray = [];
    let i = 0;
    let j = 0;

    // Merge elements from both arrays in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        } else {
            newArray.push(arr2[j]);
            j++;
        }
    }
    // Add remaining elements from arr1, if any
    while (i < arr1.length) {
        newArray.push(arr1[i]);
        i++;
    }
    // Add remaining elements from arr2, if any
    while (j < arr2.length) {
        newArray.push(arr2[j]);
        j++;
    }
    return newArray;
}

// Example usage Merge:
//let array1 = [1, 2, 3, 4, 6, 7];
//let array2 = [4, 12, 23, 23, 27, 29, 34, 36, 40, 77];
//let mergedArray = merge(array1, array2);
//console.log(mergedArray);


function mergeSort(array){
    let midpoint, leftSide, rightSide;
   if (array.length <= 1) return array;
   midpoint = Math.floor(array.length / 2);

   //The recursion call
   leftSide = mergeSort(array.slice(0, midpoint));
   rightSide = mergeSort(array.slice(midpoint, array.length));

   //Then our helper class
    return merge(leftSide, rightSide);
    



}



