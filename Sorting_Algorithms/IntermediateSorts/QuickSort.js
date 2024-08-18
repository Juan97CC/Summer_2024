/**
 * Quick Sort
 * -> Works by selecting one element CALLED the " pivot "
 * and finding the index where the pivot should end up in the
 * sorted array. Once the PIVOT is positioned appropriately quick sort
 * can be applied on either side of the pivot.
 *
 * PIVOT HELPER
 * -> Given an array, this helper function should designate an element as the pivot
 * it should then rearrange elements in the array so that all values LESS than the pivot
 * are moved to the LEFT of the pivot, and all values greater than the pivot are moved
 * to the RIGHT of the pivot.
 * -> the order of elements on either side of the pivot doesn't matter!
 * -> the HELPER should do this IN PLACE, that is, it should NOT create a new array.
 * -> when complete, the helper should return the index of the pivot.
 *
 * PICKING A PIVOT
 * -> Runtime of quick sort depends in part on how one selects the pivot
 * -> ideally, the pivot should be chosen so that it's roughly the median value
 *    in the data set you're sorting
 *
 *
 *
 *
 */



//Pivot Helper Example
/**
 * HERE we'll start with the first element
 * remember when complete, the helper should return the index of the pivot.
 *
 * let arr = [5, 2, 1, 8, 4, 7, 6, 3 ]
 * pivot(arr); // 4 ; returns
 *
 * any one of these is an acceptable mutation
 *                              Notice position of 5;
 * [2, 1, 4, 3, 5, 8, 7, 6]
 * [1, 4, 3, 2, 5, 7, 6, 8]
 * there are other acceptable mutations too!
 *
 */


function pivot(arr, start = 0, end = arr.length+1){
    //Will be the first element
    let pivot = arr[start];
    let swapIndex = start;

    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    for (let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]){
            swapIndex++; //   this tells us amount of elements LESS THAN pivot.
            swap(arr, swapIndex, i);
            //console.log(arr)
        }

    }

    swap(arr, start, swapIndex);
    return swapIndex

}

let val = pivot([4,8,2,1,5,7,6,3])
console.log(val);

//Should be return the position of 4. Which is 3
// Left must be less than 4 and right must be more
//[1,2,3,4,5,6,7,8] or can be [3,1,2,4,6,5,7,8] doesn't matter


/**
 * QuickSort Pseudocode
 * -> Call the pivot helper on the array
 * --> When the helper returns to you the updated pivot index,
 *      RECURSIVELY call the pivot helper on the subarray to the left of that index
 *      and the subarray to the right of that index.
 * ---> Your base case occurs when you consider a subarray with less than 2 elements
 *
 */

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right) {
        let pivotIndex = pivot(arr, left, right); // arr , 0, 6 is being passed in

        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;


}




console.log(quickSort([4,6,9,1,2,5,3]))

//[4,6,9,1,2,5,3]
// [ 3,2,1,4,6,9,5 ]
//         4
//  3,2,1    6,9,5
//      3      6
//  2,1       5  9
//    2
//  1


/**
 * BIG O
 * Time complexity
 * Best/Average =  O(n log n)
 *
 * Worst = O(n^2) *** a sorted array while using the first element(minimum or max) as the pivot.
 *
 * FOR sorted array try picking a middle element
 *
 * Space Complexity
 * O(log n)
 */









