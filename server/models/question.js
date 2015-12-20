var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var nameValidator = [
	  validate({
	    validator: 'isLength',
	    arguments: [10, 50],
	    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
	  })
	  ];

var QuestionSchema = new mongoose.Schema({
	question: {type: String, required: true, validate: nameValidator},
	description: String,
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	created_at: {type: Date, default: Date.now}
});
mongoose.model('Question', QuestionSchema);
var Question = mongoose.model('Question');

