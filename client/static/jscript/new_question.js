questions.controller('newQuestion_Controller', function($scope,$location, newQuestion_Factory){

	$scope.addQuestion = function(){
		console.log('in new newQuestion_Controller', $scope.new_question)
		newQuestion_Factory.addQuestion($scope.new_question);
		$location.path('/');
	};

	$scope.errors = newQuestion_Factory.getErrors();
});