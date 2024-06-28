/**
 * Rather than eliminating one element at a time like linear search,
 * you can eliminate half of the remaining elements at a time.
 *
 * Binary search ONLY works on sorted arrays!
 *
 * Divide and Conquer
 */
    let states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
    'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

 function binary_search(arr, value){
        let high, low, mid;
        high = arr.length -1; // remember minus 1 or else will be out of bound.
        low = 0;
        while (low <= high){
            mid =  Math.floor((low + high) / 2); // must use Math.floor to avoid float
             if (arr[mid] === value) return value + " found. " + mid;
             if (arr[mid] > value) high = mid - 1; // since its not mid we can subtract one
             if (arr[mid] < value) low = mid + 1; 
        }
        return "Not found";

 }

 console.log(
     binary_search(states, "Alabama")

 )



