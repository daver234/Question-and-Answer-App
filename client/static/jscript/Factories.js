questions.factory('loginFactory', function(){
    var factory = {};
    while (!factory.user || factory.user.length < 1) {
        var user = prompt("Please enter your name!");
        factory.user = user;
    }
    return factory;
})


questions.factory('Home_Factory', function($http){
	var factory = {};
	factory.getQuestions = function(callback){
		$http.get('/get_questions').success(function(output){
			callback(output);
		});
	};
	return factory;
});


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

questions.factory('newAnswer_Factory', function($http){
	var factory = {};
	var errors = {};
	console.log('in newAnswer_Factory, question id');
	factory.addAnswer = function(id,info,callback){
		//console.log('the add question is:',info)
		//var question = info.question;
		$http.post('/add_answer/'+id,info).success(function(result){
			console.log('back from adding question, error if one',result);
			callback(result);
		})
	}	
	return factory;
});

questions.factory('question_Factory', function($http){
	var factory = {};
	factory.getQuestion = function(id, callback){
		//console.log('about to go to routes');
		$http.get('/get_question/'+id).success(function(output1){
			callback(output1);
		});
	};

	factory.updateLikes = function(id, callback) {
		$http.get('/answer'+id+'/like').success(function(output){
			callback(output);
		});
	};
	return factory;
});
