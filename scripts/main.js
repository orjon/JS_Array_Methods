window.addEventListener('DOMContentLoaded', () => {

  window.onload = function (){
    console.log('It is working!')
    document.getElementById('button-splitString').addEventListener('click', stringSplit)
    document.getElementById('button-splitReset').addEventListener('click', stringSplitReset)

    document.getElementById('button-subString').addEventListener('click', subString)
    document.getElementById('button-subStringReset').addEventListener('click', subStringReset)

    document.getElementById('button-cap').addEventListener('click', cap)
    document.getElementById('button-capReset').addEventListener('click', capReset)

    document.getElementById('button-caps').addEventListener('click', caps)
    document.getElementById('button-capsReset').addEventListener('click', capsReset)

    document.getElementById('button-joinA').addEventListener('click', joinA)
    document.getElementById('button-joinAReset').addEventListener('click', joinAReset)

    document.getElementById('button-joinB').addEventListener('click', joinB)
    document.getElementById('button-joinBReset').addEventListener('click', joinBReset)

    document.getElementById('button-toString').addEventListener('click', toString)
    document.getElementById('button-toStringReset').addEventListener('click', toStringReset)

    document.getElementById('button-slice').addEventListener('click', slice)
    document.getElementById('button-sliceReset').addEventListener('click', sliceReset)

    document.getElementById('button-indexOf').addEventListener('click', indexOf)
    document.getElementById('button-indexOfReset').addEventListener('click', indexOfReset)

    document.getElementById('button-reduce').addEventListener('click', reduce)
    document.getElementById('button-reduceReset').addEventListener('click', reduceReset)

    document.getElementById('button-arrayItemLengths').addEventListener('click', arrayItemLengths)
    document.getElementById('button-arrayItemLengthsReset').addEventListener('click', arrayItemLengthsReset)

    document.getElementById('button-filterModulo').addEventListener('click', filterModulo)
    document.getElementById('button-filterModuloReset').addEventListener('click', filterModuloReset)
  }


  const filterModulo = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var filterModuloArrayStrings = $('#filterModuloArray').val().split(',')
    console.log(filterModuloArrayStrings)
    var filterModuloArray = filterModuloArrayStrings.map(item => parseInt(item))
    console.log(filterModuloArray)
    var filterModuloValueString = $('#filterModuloValue').val()
    console.log(filterModuloValueString)
    var filterModuloValue = parseInt(filterModuloValueString)
    console.log(filterModuloValue)
    var filterModuloResult = filterModuloArray.filter(item => !(item % filterModuloValue))
    console.log(filterModuloResult)
    $('#filterModuloResult').text('['+filterModuloResult+']')
  }

  const filterModuloReset = function(e) {
    e.preventDefault()
    $('#form-filterModulo').trigger('reset')
    $('#indexOfResult').text('')
  }




  // 10. Take an array of numbers and return only the ones that are divisible by 3. You will need `Array.filter` and the modulus `%` operator.
  // 	- `[1,2,3,4,5,6,7,8,9,10] => [3,6,9]`
  console.log('--------------')
  const value25 = [1,2,3,4,5,6,7,8,9,10]
  const modulo3 = item => !(item % 3)
  const value26 = value25.filter(modulo3)
  console.log(value26)




  const arrayItemLengths = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var arrayItemLengthsArray = $('#arrayItemLengthsArray').val().split(',')
    var arrayItemLengthsResult = arrayItemLengthsArray.map(item => item.length)
    $('#arrayItemLengthsResult').text('['+arrayItemLengthsResult+']')
  }

  const arrayItemLengthsReset = function(e) {
    e.preventDefault()
    $('#form-arrayItemLengths').trigger('reset')
    $('#arrayItemLengthsResult').text('')
  }


  const reduce = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var reduceArrayStrings = $('#reduceArray').val().split(',')
    var reduceArray = reduceArrayStrings.map(item => parseInt(item))
    const reducer = ((accumulator, currentValue) => accumulator + currentValue)
    var reduceResult = reduceArray.reduce(reducer)
    if (isNaN(reduceResult)) {
      $('#reduceResult').text('NaN (Non-numbers is array)')
    } else {
      $('#reduceResult').text(reduceResult)
    }

  }

  const reduceReset = function(e) {
    e.preventDefault()
    $('#form-reduce').trigger('reset')
    $('#reduceResult').text('')
  }


  const indexOf = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var indexOfArray = $('#indexOfArray').val().split(',')
    var indexOfItem = $('#indexOfItem').val()
    var indexOfResult = indexOfArray.indexOf(indexOfItem)
    if (indexOfResult === -1) {
      $('#indexOfResult').text('-1 (not found)')
    } else {
      $('#indexOfResult').text(indexOfResult)
    }

  }

  const indexOfReset = function(e) {
    e.preventDefault()
    $('#form-indexOf').trigger('reset')
    $('#indexOfResult').text('')
  }


  const slice = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var sliceString = $('#array').val()
    var sliceArray = sliceString.split(',')
    var indexA = $('#sliceIndexA').val()
    var indexB = $('#sliceIndexB').val()
    var sliceResult = sliceArray.slice(indexA,indexB)
    $('#sliceResult').text('['+sliceResult+']')
    $('#sliceLength').text(sliceResult.length)
  }

  const sliceReset = function(e) {
    e.preventDefault()
    $('#form-slice').trigger('reset')
    $('#sliceResult').text('')
    $('#sliceLength').text('')
  }


  const stringSplit = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var splitX = $('#splitX').val()
    var splitSource = $('#splitSource').val().split(splitX)
    $('#splitResult').text('['+splitSource+']')
    $('#splitLength').text(splitSource.length)
  }

  const stringSplitReset = function(e) {
    e.preventDefault()
    $('#form-splitString').trigger('reset')
    $('#splitResult').text('')
    $('#splitLength').text('')
  }

  const subString = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var subStringIndex = $('#subStringIndex').val()
    var subStringLength = $('#subStringLength').val()
    var subStringSource = $('#subStringSource').val()
    var subStringResult = undefined
    if (subStringLength === '0') {
      subStringResult = subStringSource.substr(subStringIndex)
    } else {
      subStringResult = subStringSource.substr(subStringIndex,subStringLength)
    }
    $('#subStringResult').text(subStringResult)
  }

  const subStringReset = function(e) {
    e.preventDefault()
    $('#form-subString').trigger('reset')
    $('#subStringResult').text('')
  }

  const cap = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var capSource = $('#capSource').val()
    var capResult = capSource.charAt(0).toUpperCase() + capSource.substr(1)
    $('#capResult').text(capResult)
  }

  const capReset = function(e) {
    e.preventDefault()
    $('#form-cap').trigger('reset')
    $('#capResult').text('')
  }

  const caps = function(e) {
    e.preventDefault()
    e.stopPropagation()
    const capsResult = $('#capsSource').val().split(' ').map(item => item.charAt(0).toUpperCase() + item.substr(1)).join(' ')
    $('#capsResult').text(capsResult)
  }

  const capsReset = function(e) {
    e.preventDefault()
    $('#form-caps').trigger('reset')
    $('#capsResult').text('')
  }


  const joinA = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var stringA = $('#arrayA').val()
    var arrayA = stringA.split(',')
    var stringB = $('#arrayB').val()
    var arrayB = stringB.split(',')
    var joinResultA = arrayA.concat(arrayB)
    $('#joinResultA').text('['+joinResultA+']')
    $('#joinLengthA').text(joinResultA.length)
  }

  const joinAReset = function(e) {
    e.preventDefault()
    $('#form-joinA').trigger('reset')
    $('#joinResultA').text('')
    $('#joinLengthA').text('')
  }

  const joinB = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var stringC = $('#arrayC').val()
    var arrayC = stringC.split(',')
    var stringD = $('#arrayD').val()
    var arrayD = stringD.split(',')
    var joinResultB = [...arrayC, ...arrayD]
    $('#joinResultB').text('['+joinResultB+']')
    $('#joinLengthB').text(joinResultB.length)
  }

  const joinBReset = function(e) {
    e.preventDefault()
    $('#form-joinB').trigger('reset')
    $('#joinResultB').text('')
    $('#joinLengthB').text('')
  }

  const toString = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var array = $('#array').val().split(',')
    var separator= $('#separator').val()
    var toStringResult = array.join(separator)
    $('#toStringResult').text(toStringResult)
  }

  const toStringReset = function(e) {
    e.preventDefault()
    $('#form-toString').trigger('reset')
    $('#toStringResult').text('')

  }






})
