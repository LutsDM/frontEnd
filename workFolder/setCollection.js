const uniqueIds = new Set()

uniqueIds.add(123)
uniqueIds.add(456)
uniqueIds.add(111)
uniqueIds.add(123)

console.log(uniqueIds.size)
// 3

console.log(uniqueIds.has(111))
// true

uniqueIds.delete(111)
console.log(uniqueIds.size)
// 2

uniqueIds.clear()
console.log(uniqueIds.size)
// 0

uniqueIds.add([1, 1, 2, 2, 3, 4, 5])
uniqueIds.add(3)
uniqueIds.add(2)
uniqueIds.add(1)
uniqueIds.add(1)
console.log(uniqueIds)

111222