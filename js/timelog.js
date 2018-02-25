/* jshint undef: true, unused: true, esversion: 6, asi: true */
class TimeLog {
    constructor() {
        this.allMyTimes = []
        this.allMyTitles = []
    }

    addTime(newProject, newPhase, newDate, newStart, newIntTime, newStop, newDelta, newComments) {
        let aTime = new Time(newProject, newPhase, newDate, newStart, newIntTime, newStop, newDelta, newComments, this)
        this.allMyTimes.push(aTime)
    }

    addTitle(newRow, newStudent, newProgram, newInstructor, newDate) {
        this.allMyTitles = [newRow, newStudent, newProgram, newInstructor, newDate]
        let aTitle = new TimeTitle(newRow, newStudent, newProgram, newInstructor, newDate, this)
        this.allMyTitles.push(aTitle)
    }

    getSumIntTime() {
        let sum = 0
        let result
        let decimalTime = 0
        let hours = 0
        let minutes = 0
        let seconds = 0
        this.allMyTimes.forEach((aTime) => {
            sum += aTime.intTime
            decimalTime = sum * 60 * 60
            hours = Math.floor((decimalTime / (60 * 60)))
            decimalTime = decimalTime - (hours * 60 * 60)
            minutes = Math.floor((decimalTime / 60))
            decimalTime = decimalTime - (minutes * 60)
            seconds = Math.round(decimalTime)
            if (hours < 10) {
                hours = "0" + hours
            }
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            result = hours + " h : " + minutes + " m : " + seconds + " s"
        })
        return result
    }

    getSumDeltaTime() {
        let sum = 0
        let result
        let decimalTime = 0
        let hours = 0
        let minutes = 0
        let seconds = 0
        this.allMyTimes.forEach((aTime) => {
            sum += aTime.delta
            decimalTime = sum * 60 * 60
            hours = Math.floor((decimalTime / (60 * 60)))
            decimalTime = decimalTime - (hours * 60 * 60)
            minutes = Math.floor((decimalTime / 60))
            decimalTime = decimalTime - (minutes * 60)
            seconds = Math.round(decimalTime)
            if (hours < 10) {
                hours = "0" + hours
            }
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            result = hours + " h : " + minutes + " m : " + seconds + " s"
        })
        return result
    }

    getAvgIntTime() {
        let sum = 0
        let avg = 0
        let result
        let decimalTime = 0
        let hours = 0
        let minutes = 0
        let seconds = 0
        this.allMyTimes.forEach((aTime) => {
            sum += aTime.intTime
        })
        avg = sum / this.allMyTimes.length
        decimalTime = avg * 60 * 60
        hours = Math.floor((decimalTime / (60 * 60)))
        decimalTime = decimalTime - (hours * 60 * 60)
        minutes = Math.floor((decimalTime / 60))
        decimalTime = decimalTime - (minutes * 60)
        seconds = Math.round(decimalTime)
        if (hours < 10) {
            hours = "0" + hours
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        result = hours + " h : " + minutes + " m : " + seconds + " s"
        return result
    }

    getAvgDeltaTime() {
        let sum = 0
        let avg = 0
        let result
        let decimalTime = 0
        let hours = 0
        let minutes = 0
        let seconds = 0
        this.allMyTimes.forEach((aTime) => {
            sum += aTime.delta
        })
        avg = sum / this.allMyTimes.length
        decimalTime = avg * 60 * 60
        hours = Math.floor((decimalTime / (60 * 60)))
        decimalTime = decimalTime - (hours * 60 * 60)
        minutes = Math.floor((decimalTime / 60))
        decimalTime = decimalTime - (minutes * 60)
        seconds = Math.round(decimalTime)
        if (hours < 10) {
            hours = "0" + hours
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        result = hours + " h : " + minutes + " m : " + seconds + " s"
        return result
    }

    //calculation correlation coefficicent
    // EX == total of X value
    getIntXvalue() {
        let sumInt = 0
        this.allMyTimes.forEach((aTime) => {
            sumInt += aTime.intTime
        })
        return sumInt
    }

    // EY== total of Y value
    getdeltaYvalue() {
        let sumdel = 0
        this.allMyTimes.forEach((aTime) => {
            sumdel += aTime.delta
        })
        return sumdel
    }

    //ExY
    getTotal_Int_Mul_Deltavalue() {
        let intv = 0
        let delv = 0
        let multiply = 0
        this.allMyTimes.forEach((aTime) => {
            intv = aTime.intTime
            delv = aTime.delta
            multiply += intv * delv
        })
        return multiply.toFixed(4)
    }

    //EX2
    getTotal_Int_Mul_IntValue() {
        let intv = 0
        let multiply = 0
        this.allMyTimes.forEach((aTime) => {
            intv = aTime.intTime
            multiply += intv * intv
        })
        return multiply.toFixed(4)
    }

    //EY2
    getTotal_delv_Mul_delValue() {
        let delv = 0
        let multiply = 0
        this.allMyTimes.forEach((aTime) => {
            delv = aTime.delta
            multiply += delv * delv
        })
        return multiply.toFixed(4)
    }

    getCoeffecient() {

        let n = this.allMyTimes.length
        let EXY = this.getTotal_Int_Mul_Deltavalue()
        let EX = this.getIntXvalue()
        let EY = this.getdeltaYvalue()
        let EX2 = this.getTotal_Int_Mul_IntValue()
        let EY2 = this.getTotal_delv_Mul_delValue()
        let coeff = (((n * EXY) - (EX * EY)) / Math.sqrt([(n * EX2) - (EX * EX)] * [(n * EY2) - (EY * EY)]))
        return coeff.toFixed(4)
    }
}