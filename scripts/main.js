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

    document.getElementById('button-join').addEventListener('click', join)
    document.getElementById('button-joinReset').addEventListener('click', joinReset)
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



  // // 4. Join two arrays of strings using `Array.concat`.
  // // 	- `['Mike', 'Emily'] ['Will', 'Ajay'] => ['Mike', 'Emily', 'Will', 'Ajay']`
  // console.log('--------------')
  // const value11 = ['Mike', 'Emily']
  // const value12 = ['Will', 'Ajay']
  // let value13 = value11.concat(value12)
  // console.log(value13)

  const join = function(e) {
    e.preventDefault()
    e.stopPropagation()
    var stringA = $('#arrayA').val()
    var arrayA = stringA.split(',')
    var stringB = $('#arrayB').val()
    var arrayB = stringB.split(',')
    var joinResult = arrayA.concat(arrayB)
    $('#joinResult').text(joinResult)
    $('#joinLength').text(joinResult.length)
  }

  const joinReset = function(e) {
    e.preventDefault()
    $('#form-join').trigger('reset')
    $('#joinResult').text('')
  }





})
