questions.factory('loginFactory', function(){
    var factory = {};
    while (!factory.username || factory.username.length < 2) {
        var username = prompt("Please enter your name!");
        factory.username = username;
    }
    return factory;
})
