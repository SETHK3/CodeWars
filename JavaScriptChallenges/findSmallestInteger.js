function findSmallestInt(arr) {
    const sorted = arr.sort((num1, num2) => num1 - num2)
    
    return sorted[0]
}

console.log(findSmallestInt([34, 15, 88, 2]))