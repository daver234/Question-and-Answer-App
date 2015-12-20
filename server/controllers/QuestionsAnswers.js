var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var moment = require('moment');
moment().format(); 
var validate = require('mongoose-validator');

module.exports = (function() {
return {
  get_questions: function(req, res) {
    console.log('in get_questions server:');
    Question.find({}).populate('answers Answer').exec(function(err, questions){
      if(err){
          console.log("something wrong in finding all questions");
        } else {
          console.log('got all questions');
        }
      res.json(questions); 
    })
  },
  get_question: function(req, res){
	console.log('in get question')
	Question.findOne({ _id : req.params.id }).populate('answers').exec(function(err, results){
		if(err){
			console.log("something wrong in finding a single question");
			res.json(err);
		} else {
			console.log('got single question');
			res.json(results);
		}
	});
	},

	add_answer: function(req, res){
		console.log('req in add_answer',req.body.username);
		Question.findOne({_id: req.params.id}, function(err, question){
			var new_answer = new Answer({answer: req.body.answer, details: req.body.details, username: req.body.username,  _question: req.params.id, likes: 0});
			console.log('to push is this answer',new_answer);
			new_answer._question = question._id;
			console.log('updated new answer',new_answer);
			question.answers.push(new_answer);
			new_answer.save(function(err){
				question.save(function(err){
				if (err) {
					console.log('error saving answer', err);
					res.json(err);
				} else {
						res.end();
						}
					})
				})
			})
		
	},

	add_question: function(req, res){
		console.log('in add_question in server controller',req.body);
		var question = new Question(req.body);

		question.save(function(err, result){
			if(err){
				res.json(err);
			} else {
				res.json(result._id);
			}
		});
	},

	like_answer: function(req, res){
		console.log('in like answer');
		Answer.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}}, function(err, answer){
            Question.findOne({_id: answer._question}).populate('answers').exec(function(err, question){
                if (err) {
                    console.log(err);
                    res.json(err)
                } else {
                    res.json(question);
                }
            })
        })
    }
	
}
  }) ();