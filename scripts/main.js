window.addEventListener('DOMContentLoaded', () => {

  window.onload = function (){
    console.log('It is working!')
    document.getElementById('button-splitString').addEventListener('click', stringSplit)
    document.getElementById('button-splitReset').addEventListener('click', stringSplitReset)
    document.getElementById('button-subString').addEventListener('click', subString)
    document.getElementById('button-subStringReset').addEventListener('click', subStringReset)
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
    alert(subStringSource+ ' '+subStringIndex +' '+subStringLength)
    var subStringResult = subStringSource.substr(subStringIndex,subStringLength)
    $('#subStringResult').text(subStringResult)
  }

  const subStringReset = function(e) {
    e.preventDefault()
    $('#form-subString').trigger('reset')
    $('#subStringResult').text('')
  }

})
