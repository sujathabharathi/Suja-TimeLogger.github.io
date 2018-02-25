/* jshint undef: true, unused: true, esversion: 6, asi: true */

window.angular
	.module('myApp', [])
	.controller('MainCtrl', MainCtrl)
	.directive('onReadFile', OnReadFile.directiveFactory) 	
	
	