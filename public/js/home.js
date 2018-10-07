var $login = $('#login');


var logUserIn = function(event) {
    event.preventDefault();
    console.log("here");

    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var category = $("input[name='category']:checked").val();

    if (email === "" || password === "" || category === "") {
            console.log("something is empty");
        }
    else if (!email.match('.+\@.+\..+')) {
        console.log("email format is invalid");
    }
    else {
        console.log("everything is filled in");
        var user = {
            email: email,
            password: password,
            category: category
        }
        console.log(user);
        // if (category === "Shelter" || category === "Owner") {
        //     $.ajax({
        //         method: "POST",
        //         url: "/api/checkprovider",
        //         data: user
        //         })
        //         .then(function(resdata) {
        //             console.log(resdata.user);
        //             if (category === 'Borrower') {
        //                 //window.location.replace("/login/borrower/");
        //             }
        //             else {
        //                 //window.location.replace("/login/provider/");
        //             } 
        //         });
        // }
        // else if (category === "Borrower") {
        //     $.ajax({
        //         method: "POST",
        //         url: "/api/checkborrower",
        //         data: user
        //         })
        //         .then(function(resdata) {
        //             console.log(resdata.user);
        //             if (category === 'Borrower') {
        //                 //window.location.replace("/login/borrower/");
        //             }
        //             else {
        //                 //window.location.replace("/login/provider/");
        //             } 
        //         });
        // }

        $.ajax({
            method: "POST",
            url: "/api/login",
            data: user
            })
            .then(function(resdata) {
                console.log(resdata);
                if (category === 'Borrower') {
                    if (resdata.message === "Incorrect email.") {
                        console.log("Incorrect email");
                    }
                    else if (resdata.message === "Incorrect password.") {
                        console.log("Incorrect password");
                    }
                    else {
                        console.log("Found user");
                        window.location.replace("/login/borrower/" + resdata.user.id);
                    }
                }
                else {
                    if (resdata.message === "Incorrect email.") {
                        console.log("Incorrect email");
                    }
                    else if (resdata.message === "Incorrect password.") {
                        console.log("Incorrect password");
                    }
                    else {
                        console.log("Found user");
                        window.location.replace("/login/provider/" + resdata.user.id);
                    }  
                } 
            });

    }
    console.log(category);
    
}

$login.on('click', logUserIn);