questions.controller('newQuestion_Controller', function($scope,$location, newQuestion_Factory, loginFactory){

	$scope.addQuestion = function(){
		console.log('in new newQuestion_Controller', $scope.new_question)
		newQuestion_Factory.addQuestion($scope.new_question, function(result){
			//console.log('here is result from addQuestion',result);
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
