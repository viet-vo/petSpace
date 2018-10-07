var $signup = $('#signup');

var signUserUp = function(event) {
    event.preventDefault();
    $('#msg').text("");

    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var category = $("input[name='category']:checked").val();
    var name = $('#name').val().trim();
    var streetAddress = $('#streetAddress').val().trim();
    var city = $('#city').val().trim();
    var state = $('#state').val().trim();
    var zip = $('#zip').val().trim();

    if (email === "" || password === "" || category === "" || name === "" ||
        streetAddress === "" || city === "" || state === "" || zip === "") {
            $('#msg').text("Please fill in all the fields.");
        }
    else if (!email.match('.+\@.+\..+')) {
        $('#msg').text("Email format is invalid.");
    }
    else {
        var user = {
            email: email,
            password: password,
            category: category,
            name: name,
            streetAddress: streetAddress,
            city: city,
            state: state,
            zip: zip
        }
        $.ajax({
            method: "POST",
            url: "/api/signup",
            data: user
            })
            .then(function() {
                if (category === 'Borrower') {
                    window.location.replace("/borrower");
                }
                else {
                    window.location.replace("/provider");
                } 
            });
    }
}

$signup.on('click', signUserUp);