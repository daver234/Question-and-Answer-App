questions.controller('Home_Controller', function($scope,$location, Home_Factory, loginFactory) {
    $scope.username = loginFactory.username;
    console.log('username is:',$scope.username);
    Home_Factory.getQuestions(function(data){
    	console.log('here is questions object',data);
    	
      $scope.questions = data;
    });
  });