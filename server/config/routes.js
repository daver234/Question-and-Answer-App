var QuestionAnswer = require('../controllers/QuestionsAnswers.js');


module.exports = function(app) {
    
    app.get('/get_questions', function(req, res){
      QuestionAnswer.get_questions(req, res);
    });
    app.post('/add_question', function(req, res){
      //console.log('ready to add_question',req)
      QuestionAnswer.add_question(req, res);
    });
    // app.get('/get_answers/:id', function(req, res){
    //   QuestionAnswer.get_answers(req, res);
    // });
    app.get('/answer/:id/like', function(req, res){
      console.log('got to like answer');
      QuestionAnswer.like_answer(req,res);
    })
    app.get('/get_question/:id', function(req, res){
      QuestionAnswer.get_question(req, res);
    });
    app.post('/add_answer/:id', function(req, res){
      QuestionAnswer.add_answer(req, res);
    });
    // app.get('/like_answer/:id', function(req, res){
    //   QuestionAnswer.like_answer(req, res);
    // });
  
};
