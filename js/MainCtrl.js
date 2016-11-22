/* Wrapping the entire
*  controller inside a function
*/
(function(){
	'use strict'
	/*
	* Declaring a controller
	* first option is controller name
	* Second option is the behaviour of tat controler
	* $scope is strictly bind with MainCtrl
	* In html where ever this controller is defined we can use variables under this scope
	*/
	app.controller('MainCtrl',function($scope){

		/* prints the message to browsers console*/
		console.log('MainCtrl has been created');
		/* assigning this to a local variable inside the controller
		*  To deferentiate the this out side the controller with inside controller (****BEST PRACTICE****)
		*/
		var self = this;
		/* Assign a value to message variable, and bind the value*/
		self.message = 'Hello';
		/* create a new function when this executes message var value will changes*/
		self.changeMessage = function(){
			self.message = 'Good Bye';
		};
		/* create a new function when this executes message var value will changes*/
		self.hello = function(){
			self.message = 'Hello';
		};

		/* Creating a array with json values*/

		self.notes = [
			{id: 1, label: 'First Note', done: false, assignee: 'Narasimha'},
			{id: 2, label: 'Second Note', done: false},
			{id: 3, label: 'Done Note', done: true},
			{id: 4, label: 'Last Note', done: false, assignee: 'Raju'}
		];
		$scope.sayHello = function () {
			return 'Hello';
		};
});
})();
