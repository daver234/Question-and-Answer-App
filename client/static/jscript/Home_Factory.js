questions.factory('Home_Factory', function($http){
	var factory = {};
	factory.getQuestions = function(callback){
		$http.get('/get_questions').success(function(output){
			callback(output);
		});
	};
	return factory;
});
