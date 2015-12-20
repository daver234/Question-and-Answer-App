questions.factory('newQuestion_Factory', function($http){
	var factory = {};
	var errors = {messages: " coming soon"};
	console.log('in newQuestion_Factory');
	factory.addQuestion = function(info,callback){
		//console.log('the add question is:',info)
		var question = info.question;
		$http.post('/add_question',info).success(function(result){
			console.log('back from adding question, error if one',result);
			callback(result);
		})
	}	
	return factory;
});