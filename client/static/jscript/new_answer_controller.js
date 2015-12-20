questions.controller('newAnswer_Controller', function($scope,$location,$routeParams, newAnswer_Factory, loginFactory, question_Factory){
	$scope.username = loginFactory.username;

	question_Factory.getQuestion($routeParams.id, function(data){
		console.log('back from getQ in newAnswer Controller',data);
		$scope.question = data;
	});


	$scope.addAnswer = function(){
		console.log('in newAnswer Controller with id',$scope.new_answer,$routeParams.id);
		$scope.new_answer.username = $scope.username;
		newAnswer_Factory.addAnswer($routeParams.id, $scope.new_answer, function(result) {
			if (result.name == 'ValidationError') {
              //console.log('Question validation failed',result);
              $scope.errors = "Please enter more than 5 characters";
              $location.path('/new_question');
            } else {
            	//console.log('in new question no errors')
              $scope.errors =[];
              	$location.path('/');
              }
                });
              }

	});