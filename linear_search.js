// Finding an Element in a given array using linear search
//Time Complexity of Linear Search - O(n)
function linear_search(arr, n){
    for(var elem of arr){
        if(elem === n){
            return arr.indexOf(elem);
        }
    }
}
console.log(linear_search([1,2,3,4,5,6,7,8,9,10], 8));