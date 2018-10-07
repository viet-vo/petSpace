var $login = $('#login');


var logUserIn = function(event) {
    event.preventDefault();
    console.log("here");
    
}

$login.on('click', logUserIn);