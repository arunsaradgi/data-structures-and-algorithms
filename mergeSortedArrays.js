function mergeSortedArrays(arr1, arr2) {
    let output = [...arr1, ...arr2].sort((a, b) => a - b);
    return output;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]))