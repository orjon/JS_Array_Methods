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

    var capsSource = $('#capsSource').val().split(' ')
    const capitalize = item => item.charAt(0).toUpperCase() + item.substr(1)
    const temp = capsSource.map(capitalize)
    const capsResult = temp.join(' ')
    $('#capsResult').text(capsResult)
  }

  const capsReset = function(e) {
    e.preventDefault()
    $('#form-caps').trigger('reset')
    $('#capsResult').text('')
  }

})
