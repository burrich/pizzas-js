var array = [1, 2, 3, 4]

var moy = array.reduce(function (accu, item, index, array) {
  accu += item
  if (index === array.length - 1) {
    return accu / 4
  } else {
    return accu
  }
}, 0) // accu init

console.log('moyenne : ' + moy)

var isEven = function (v) {
  return v % 2 === 0
}



var array2 = array.reduce(function (accu, item, index, array) {
  if (isEven(item)) {
    accu.push(item)
  }

  return accu
}, [])


var filtre = function filtre (array, condition) {
  return array.reduce(function (accu, item, index, array) {
    if (condition(item)) {
      accu.push(item)
    }

    return accu
  }, [])
}

console.log('reduce filter : ' + array2)
console.log('reduce filter : ' + filtre(array2, function (item) {
  return item % 2 === 0
}))