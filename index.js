console.clear()
function permut(array) {
  if (!array.length) {
    return [[]]
  } else if (array.length === 1) {
    return [array]
  } else if (array.length === 2) {
    return [
      array,
      [array[1], array[0]]
    ]
  } else {
    return array.reduce((a, b, index) => {
      var arr = [].concat(array)
      arr.splice(index, 1)
      return a.concat(permut(arr).map(_arr => [b].concat(_arr)))
    }, [])
  }
}

function permutCombi(array, prefix = []) {
  if (!array[0] || !array[0].length) {
    return prefix
  } else if (array.length === 1) {
    return array[0].map(el => prefix.concat([el]))
  } else {
    return array[0].reduce((a, b) => {
      return a.concat(
        permutCombi(array.slice(1), prefix.concat(b))
      )
    }, [])
  }
}

console.log(permut([])); // []
console.log(permut([1])); // [[1]]
console.log(permut([1, 2])); // [[1, 2], [2, 1]]
console.log(permut([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

console.log('\n\n')

console.log(permutCombi([[]])); // []
console.log(permutCombi([[1]])); // [[1]]
console.log(permutCombi([[1, 2]])); // [[1], [2]]
console.log(permutCombi([[1],[2]])); // [[1, 2]]
console.log(permutCombi([[1, 2],[2]])); // [[1, 2], [2, 2]]
console.log(permutCombi([[1, 2],[2, 4]])); // [[1, 2], [2, 2]]
