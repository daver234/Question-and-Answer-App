var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var nameValidator = [
	  validate({
	    validator: 'isLength',
	    arguments: [10, 50],
	    message: 'Answer should be between {ARGS[0]} and {ARGS[1]} characters'
	  })
	  ];

var AnswerSchema = new mongoose.Schema({
	answer: {type: String, required: true, validate: nameValidator},
	details: String,
	likes: Number,
	username: String,
	_question: {type: Schema.Types.ObjectId, ref: 'Question'},
	created_at: {type: Date, default: Date.now}
});
mongoose.model('Answer', AnswerSchema);
var Answer = mongoose.model('Answer');

