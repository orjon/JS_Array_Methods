

// 	- `'12' => 12`
console.log('--------------')
const value7 = '12'
const value8 = parseInt(value7)
console.log(value8)
// 5. Convert a decimal number to a string with 2 decimal places using `Number.toFixed`
// 	- `15.827993 => '15.82'`
console.log('--------------')
const value9 = 15.827993
let value10 = value9.toFixed(2)
console.log(value10)
// OR
value10 = parseFloat(value9).toFixed(2) //more robust as it can take strings too
console.log(value10)
// 4. Join two arrays of strings using `Array.concat`.
// 	- `['Mike', 'Emily'] ['Will', 'Ajay'] => ['Mike', 'Emily', 'Will', 'Ajay']`
console.log('--------------')
const value11 = ['Mike', 'Emily']
const value12 = ['Will', 'Ajay']
let value13 = value11.concat(value12)
console.log(value13)
//or
value13 = [...value11, ...value12]
console.log(value13)
// 5. Take an array of words and turn them into a string with pipes `|` between each word using `Array.join`.
// 	- `['cloud', 'house', 'mountain', 'field'] => "cloud|house|mountain|field"`
console.log('--------------')
const value14 = ['cloud', 'house', 'mountain', 'field']
const value15 = value14.join('|')
console.log(value15)
// 6. Make a new array of the 2nd and 3rd elements of an array using `Array.slice`
// 	- `['hippo', 'giraffe', 'lion', 'hyena'] => ['giraffe', 'lion']`
const value16 = ['hippo', 'giraffe', 'lion', 'hyena']
const value17 = value16.slice(1,3) //splice would remove these from the original
console.log(value17)
// 7. Find the index of the word "pizza" in the following array with  `Array.indexOf`.
// 	- `['salad', 'burger', 'pizza', 'soup'] => 2`
console.log('--------------')
const value18 = ['salad', 'burger', 'pizza', 'soup', 'pizza'] // Only returns first instance
const value19 = value18.indexOf('pizza')
console.log(value19)
// 8. Sum the contents on an array of numbers using `Array.reduce`.
// 	- `[1,2,3] => 6`
console.log('--------------')
const value20 = [4,2,5]
// function getSum(total, num) {
//   return total + num
// }

const reducer = ((accumulator, currentValue) => accumulator + currentValue)
const value21 = value20.reduce(reducer)
console.log(value21)

// 9. Take an array of strings and turn it into an array of numbers indicating the length of each string using `Array.map`.
// 	- `['Los Angeles', 'New York', 'Huston'] => [11, 8, 6]`
console.log('--------------')
const value22 = ['Los Angeles', 'New York', 'Huston']
const getLength = item => item.length
const value23 = value22.map(getLength)
console.log(value23)
//OR
// const value24 = value22.map((city) => city.length)
//OR
const value24 = value22.map(city => city.length)
console.log(value24)
// 10. Take an array of numbers and return only the ones that are divisible by 3. You will need `Array.filter` and the modulus `%` operator.
// 	- `[1,2,3,4,5,6,7,8,9,10] => [3,6,9]`
console.log('--------------')
const value25 = [1,2,3,4,5,6,7,8,9,10]
const modulo3 = item => !(item % 3)
const value26 = value25.filter(modulo3)
console.log(value26)
// 11. Order an array of strings alphabetically with `Array.sort`.
// 	- `['Mohammed', 'Katheryn', 'Aaron', 'Amanda'] => ['Aaron', 'Amanda', 'Katheryn', 'Mohammed']`
console.log('--------------')
const value27 = ['Mohammed', 'Katheryn', 'Aaron', 'Amanda']
const value28 = value27.sort()
console.log(value28)
// 12. Turn an array of numbers into an array of strings using `Array.map` and `Number.toString`
// 	- `[5,10,15,20,25] => ['5','10','15','20','25']`
console.log('--------------')
const value29 = [5,10,15,20,25]
const stringify = item => item.toString()
const value30 = value29.map(stringify)
console.log(value30)
// 13. Convert a phrase to title case, using `String.split`, `Array.map`, `String.toUpperCase`, `String.substr` and `Array.join`
// 	- `'the wind in the willows' => 'The Wind In The Willows'`
console.log('--------------')
const value31 = 'the wind in the willows'
const value32 = value31.split(' ')
const capitalize = item => item.charAt(0).toUpperCase() + item.substr(1)
const value33 = value32.map(capitalize)
const value34 = value33.join(' ')
console.log(value34)
