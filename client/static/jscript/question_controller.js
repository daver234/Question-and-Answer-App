questions.controller('question_controller', function($scope,$location,$routeParams, question_Factory){
	$scope.question = {};

	if ($routeParams == null){
		$routeParams = $scope.use_id;
	}
	console.log(' this is route params', $routeParams.id);
	question_Factory.getQuestion($routeParams.id, function(question1){
		console.log('back from get question',question1);
		$scope.question = question1;
		//$scope.use_id = $routeParams.id;
		//$scope.question.answers.reverse();
		//$scope.$apply();
	});

	$scope.like = function(id){
		console.log('in question_controller with id',id);
		//var id2 = id;
		question_Factory.updateLikes(id, function(question){
			$scope.question = question;
			//$location.path('/question/'+$routeParams.id);
		});
	}
});

