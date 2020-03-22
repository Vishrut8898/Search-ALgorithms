// Finding an Element in a given array using binary search
//Time Complexity of Linear Search - O(n)
function binary_search(arr, elem){
    let first = 0;
    let last = arr.length - 1;  
  
  while(first <= last) {
    
    let mid = Math.floor((first + last) / 2);    
    if(elem === arr[mid]) {
      return console.log("Element exists at index " + mid);
    }    
    if(elem > arr[mid]) {
      first = mid + 1;
    }    
    if(elem < arr[mid]) {
      last = mid - 1;
    }    
  }
}
console.log(binary_search([1,2,3,4,5,6,7,8,9,10], 7));