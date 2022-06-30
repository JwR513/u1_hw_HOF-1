// You must RETURN your result in each function!

function printNums(nums) {
  const newArray = []
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  nums.forEach((n) => {
    return newArray.push(n)
  })
  return newArray
}

function returnSums(nums) {
  const newArray = []
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
  nums.forEach((n) => {
    return newArray.push(n + newArray.length)
  })
  return newArray
}

function returnTotal(objs) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
  let sum = 0
  objs.forEach((number) => {
    return (sum += number.n)
  })
  return sum
}

function printMoney(decimals) {
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
  const money = decimals.map((n) => {
    return '$' + n.toFixed(2)
  })
  return money
}

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */ const hell = values.filter((n) => {
    return n.happy === true
  })
  return hell
}

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  const lleh = nums.reduce((acc, val) => {
    let hey = val + 2
    return (hey += acc)
  }, 0)
  return lleh
}

function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  const yeah = strings.reduce((acc, val) => {
    return acc + val
  })
  return yeah
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  const neveah = objs.sort((n, m) => {
    return n.value - m.value
  })
  return neveah
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
