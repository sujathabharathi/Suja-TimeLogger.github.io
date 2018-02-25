T = {}
T.timerDiv = document.getElementById('timer')

function displayTimer() {
  var hours = '00',
    minutes = '00',
    miliseconds = 0,
    seconds = '00',
    time = '',
    timeNow = new Date().getTime() 
  T.difference = timeNow - T.timerStarted
 
  // milliseconds
  if (T.difference > 10) {
    miliseconds = Math.floor((T.difference % 1000) / 10)
    if (miliseconds < 10) {
      miliseconds = '0' + String(miliseconds)
    }
  }
  // seconds
  if (T.difference > 1000) {
    seconds = Math.floor(T.difference / 1000)
    if (seconds > 60) {
      seconds = seconds % 60
    }
    if (seconds < 10) {
      seconds = '0' + String(seconds)
    }
  }
  // minutes
  if (T.difference > 60000) {
    minutes = Math.floor(T.difference / 60000)
    if (minutes > 60) {
      minutes = minutes % 60
    }
    if (minutes < 10) {
      minutes = '0' + String(minutes)
    }
  }
  // hours
  if (T.difference > 3600000) {
    hours = Math.floor(T.difference / 3600000)
	if (hours < 10) {
      hours = '0' + String(hours)
    }
  }
  time = hours + ':'
  time += minutes + ':'
  time += seconds + ':'
  time += miliseconds
  T.timerDiv.innerHTML = time
}

function startTimer() {

  T.timerStarted = new Date().getTime()
  //console.log('T.timerStarted: ' + T.timerStarted)
  if (T.difference > 0) {
    T.timerStarted = T.timerStarted - T.difference
	
  }

  T.timerInterval = setInterval(function() {
    displayTimer()
  }, 10) 

  document.getElementById('go').style.display = "none"
  document.getElementById('stopt').style.display = "inline"
  document.getElementById('clear').style.display = "none"
}

function stopTimer() {
  clearInterval(T.timerInterval) 

  document.getElementById('stopt').style.display = "none"
  document.getElementById('go').style.display = "inline"
  document.getElementById('clear').style.display = "inline"
}

function clearTimer() {
  clearInterval(T.timerInterval)
  T.timerDiv.innerHTML = "00:00:00:00" 
  T.difference = 0 
  
  document.getElementById('stopt').style.display = "none"
  document.getElementById('go').style.display = "inline"
  document.getElementById('clear').style.display = "none"
}

var dt = new Date()
document.getElementById("datet").innerHTML = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (dt.getFullYear())

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s
  t = setTimeout(function() {
    startTime()
  }, 500)
}
startTime()



function saveTextAsFile() {
  var textToSave = document.getElementById("table1").value
  var textToSaveAsBlob = new Blob([textToSave], {
    type: "text/plain"
  })
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob)
  let inputFileNameToSaveAs = "TimeSheet.csv"
  var fileNameToSaveAs = inputFileNameToSaveAs
  var downloadLink = document.createElement("a")
  downloadLink.download = fileNameToSaveAs
  downloadLink.innerHTML = "Download File"
  downloadLink.href = textToSaveAsURL
  downloadLink.onclick = destroyClickedElement
  downloadLink.style.display = "none"
  document.body.appendChild(downloadLink)
  downloadLink.click()
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target)
}

function loadFileAsText() {
  var fileToLoad = document.getElementById("timefile").files[0]
  var fileReader = new FileReader()
  fileReader.onload = function(fileLoadedEvent) {
    var textFromFileLoaded = fileLoadedEvent.target.result
    document.getElementById("table1").value = textFromFileLoaded
  }
  fileReader.readAsText(fileToLoad, "UTF-8")
}