/*globals describe beforeEach controller it exppect aTime Timelog Time TimeTitle*/
describe("For Property display", function(){
	'use strict';
	describe("TimeTitle", function(){
		var theTimeTitle;
		beforeEach(
			function(){
				theTimeTitle = new TimeTitle();
			}
		);
		
		it("should have .row property",function(){
			expect(theTimeTitle.hasOwnProperty('row')).toBeTruthy();		
		});
		
		it("should have .student property",function(){
			expect(theTimeTitle.hasOwnProperty('student')).toBeTruthy();		
		});
		
		it("should have .program property",function(){
			expect(theTimeTitle.hasOwnProperty('program')).toBeTruthy();		
		});
		
		it("should have .instructor property",function(){
			expect(theTimeTitle.hasOwnProperty('instructor')).toBeTruthy();		
		});
		
		it("should have .date property",function(){
			expect(theTimeTitle.hasOwnProperty('date')).toBeTruthy();		
		});
		
		it("should have .myTimeLog property",function(){
			expect(theTimeTitle.hasOwnProperty('myTimeLog')).toBeTruthy();		
		});
		
		
		
	});
});
