/* jshint undef: true, unused: true, esversion: 6, asi: true */
class MainCtrl {
  constructor() {
    this.timeLog = new TimeLog()
   }

  show() {
    let element = document.querySelector('#table1')
    element.style.display = 'table'
  }

  setUp() {
    for (let data of this.content) {
      this.timeLog.addTime(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7])
    }
  }

  showContent(fileContent) {
    this.fieldNames = []
    this.content = []
    this.row = ''
    this.student = ''
    this.program = ''
    this.instructor = ''
    this.date = ''
    let contentLines = fileContent.split('\n')
    for (let line of contentLines) {
      let items = line.split(',')
      if (items[0] !== '') {
        if (items[0] == 'PSP Time Recording Log') {
          this.row = items[0]
        } 
		else if (items[0] == 'Student') {
          this.student = items[1]
        }
		else if (items[0] == 'Program') {
          this.program = items[1]
        } 
		else if (items[0] == 'Instructor') {
          this.instructor = items[1]
        } 
		else if (items[0] == 'Date') {
          this.date = items[1]
        } 
		else if (items[0] == 'Project') {

          this.fieldNames = items
        } 
		else {
          let inttime = 0
          for (let item of items.slice(4, 5)) {

            if (items[4] !== '') {
              let intti = items[4][0] + items[4][1] + items[4][2] + items[4][3] + items[4][4] + items[4][5] + items[4][6]

              if (intti === 'IntTime') {
                inttime = Number(item.replace(intti, 0))
              } 
			  else {
                inttime = inttime * 1000 + parseFloat(item)
              }

            }

          }

          let deltatime = 0
          for (let item of items.slice(6, 7)) {

            if (items[6] !== '') {
              let dtime = items[6][0] + items[6][1] + items[6][2] + items[6][3] + items[6][4] + items[6][5] + items[6][6] + items[6][7] + items[6][8]

              if (dtime === 'DeltaTime') {

                deltatime = Number(item.replace(dtime, 0))

              }
			  else {
                deltatime = deltatime * 1000 + parseFloat(item)
              }

            }
          }
          this.content.push([items[0], items[1], items[2], (items[3]), inttime, (items[5]), deltatime, (items[7])])
        }
      }
    }
    this.timeLog.addTitle(this.row, this.student, this.program, this.instructor, this.date)
    this.setUp()
  }

  addEntry() {

    this.timeLog.addTime(
      this.project,
      this.phase,
      this.date,
      this.start,
      this.intTime,
      this.stop,
      this.delta,
      this.comments
    )

    this.clearEntry()
  }

  clearEntry() {
    this.project = ''
    this.phase = ''
    this.date = ''
    this.start = ''
    this.intTime = ''
    this.stop = ''
    this.delta = ''
    this.comments = ''

  }

  editRow(row, editId, notEditId) {
    let rowContent = document.getElementsByClassName(row)
    for (var i = 0; i < rowContent.length; i++) {
      rowContent[i].setAttribute('contenteditable', 'true')
    }

    let edited = document.getElementById(editId)
    let notEditable = document.getElementById(notEditId)
    edited.style.display = 'none'
    notEditable.style.display = 'block'
  }

}