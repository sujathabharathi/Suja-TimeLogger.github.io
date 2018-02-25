/* jshint undef: true, unused: true, esversion: 6, asi: true */
	class Time {
		constructor(newProject, newPhase, newDate, newStart, newIntTime, newStop, newDelta, newComments, theTimeLog) {
			this.project = newProject
			this.phase = newPhase
			this.date = newDate
			this.start = newStart
			this.intTime = newIntTime
			this.stop = newStop
			this.delta = newDelta
			this.comments = newComments,
		   this.myTimeLog = theTimeLog
		}
	}