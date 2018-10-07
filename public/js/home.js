var $login = $('#login');

var logUserIn = function(event) {
    event.preventDefault();
    $('#msg').text("");

    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var category = $("input[name='category']:checked").val();

    if (email === "" || password === "" || category === "") {
            $('#msg').text("Please fill in all the fields.");
        }
    else if (!email.match('.+\@.+\..+')) {
        $('#msg').text("Email format is invalid.");
    }
    else {
        var user = {
            email: email,
            password: password,
            category: category
        }
        $.ajax({
            method: "POST",
            url: "/api/login",
            data: user
            })
            .then(function(resdata) {
                console.log(resdata);
                if (category === 'Borrower') {
                    if (resdata.message === "Incorrect email.") {
                        $('#msg').text(resdata.message);
                    }
                    else if (resdata.message === "Incorrect password.") {
                        $('#msg').text(resdata.message);
                    }
                    else {
                        window.location.replace("/login/borrower/" + resdata.user.id);
                    }
                }
                else {
                    if (resdata.message === "Incorrect email.") {
                        $('#msg').text(resdata.message);
                    }
                    else if (resdata.message === "Incorrect password.") {

                        $('#msg').text(resdata.message);
                    }
                    else {
                        window.location.replace("/login/provider/" + resdata.user.id);
                    }  
                } 
            });
    }
}

$login.on('click', logUserIn);