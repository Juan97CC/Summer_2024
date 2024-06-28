/**
 *
 * Method findIndex(), indexOf(), and includes() all  use
 * linear search algorithm.
 *
 * Time Complexity BIG O:
 *  Worst Case: O(n)
 *
 *  Best Case: O(1)
 */


var names_array = ["Juan", "Carlos", "John", "Arias", "Colombia",
"Andres", "Rooney", "Messi", "James", "Munoz"]


function findName(arr, value){
    if(arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase() === value.toLowerCase()){
                console.log("Found in Array bposition : " + i);
            }

                }
    }
}

findName(names_array, "colombia")