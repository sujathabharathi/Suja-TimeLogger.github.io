/*globals describe beforeEach controller it exppect aTime Timelog Time*/
describe("For Property display", function(){
	'use strict';
	describe("Time", function(){
		var theTime;
		beforeEach(
			function(){
				theTime = new Time();
			}
		);
		
		it("should have .project property",function(){
			expect(theTime.hasOwnProperty('project')).toBeTruthy();		
		});
		
		it("should have .phase property",function(){
			expect(theTime.hasOwnProperty('phase')).toBeTruthy();		
		});
		
		it("should have .start property",function(){
			expect(theTime.hasOwnProperty('start')).toBeTruthy();		
		});
		
		it("should have .date property",function(){
			expect(theTime.hasOwnProperty('date')).toBeTruthy();		
		});
		
		it("should have .intTime property",function(){
			expect(theTime.hasOwnProperty('intTime')).toBeTruthy();		
		});
		
		it("should have .stop property",function(){
			expect(theTime.hasOwnProperty('stop')).toBeTruthy();		
		});
		
		it("should have .delta property",function(){
			expect(theTime.hasOwnProperty('delta')).toBeTruthy();		
		});
		
		it("should have .comments property",function(){
			expect(theTime.hasOwnProperty('comments')).toBeTruthy();		
		});
		
		
	});
});
