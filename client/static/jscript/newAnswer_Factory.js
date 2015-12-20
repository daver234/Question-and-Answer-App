questions.factory('newAnswer_Factory', function($http){
	var factory = {};
	var errors = {};
	console.log('in newAnswer_Factory, question id');
	factory.addAnswer = function(id,info,callback){
		console.log('the add question is:',info,id)
		//var question = info.question;
		$http.post('/add_answer/'+id,info).success(function(result){
			console.log('back from adding question, error if one',result);
			callback(result);
		})
	}	
	return factory;
});