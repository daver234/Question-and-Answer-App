questions.factory('question_Factory', function($http){
	var factory = {};
	factory.getQuestion = function(id, callback){
		//console.log('about to go to routes');
		$http.get('/get_question/'+id).success(function(output1){
			callback(output1);
		});
	};

	factory.updateLikes = function(id, callback) {
		$http.get('/answer/'+id+'/like').success(function(output){
			callback(output);
		});
	};
	return factory;
});
