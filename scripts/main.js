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

    <!--
          // 6. Make a new array of the 2nd and 3rd elements of an array using `Array.slice`
          // 	- `['hippo', 'giraffe', 'lion', 'hyena'] => ['giraffe', 'lion']`
          // const value16 = ['hippo', 'giraffe', 'lion', 'hyena']
          // const value17 = value16.slice(1,3) //splice would remove these from the original
          // console.log(value17)
          // -->


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
