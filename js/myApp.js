//On the 'myApp' module we declare a controller called 'MultiplicationCtrl'.  
//It is a function that takes 2 parameters: $scope and $attrs, which is used
//to pull in an initial value for the table size from the HTML template.
//The $attrs service provides a map of all the attributes present on the element
//that the ng-controller was placed on (in this case, the div containing the 
//table). Inside the controller we define a scope variable called numberLimit that uses
//the $attrs service. 

angular.module('myApp', [])
    .controller('MultiplicationCtrl', function($scope, $attrs) {
        $scope.numberLimit = $attrs.initialNumberLimit || 10;

//Here the scope variable numbers is defined as a function that returns an
//array of numbers from 0 up to the numberLimit (10). This is done using a for-loop
//that starts at 0 and increments by 1 until it gets to 10.

        $scope.numbers = function() {
        	var numbers = [];
        	for(var i=0; i<$scope.numberLimit; i++) {
        		numbers[i] = i + 1;
        	};
        	return numbers;
        };

//Here the compute variable is defined as a function that multiplies numberA
//times numberB that can be called in the HTML template where ng-repeat is iterating 
//the numbers retrieved by the numbers function.

        $scope.compute = function (a, b) {
        	return a * b;
        };
    });


