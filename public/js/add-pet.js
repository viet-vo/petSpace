var $addpet = $('#addpet');


var addNewPet = function(event) {
    event.preventDefault();
    console.log("here");

    var name = $('#name').val().trim();
    var category = $('#category').val();
    var breed = $('#breed').val().trim();
    var gender = $("input[name='gender']:checked").val();
    var temperament = $('#temperament').val();
    var photoURL = $('#photoURL').val().trim();
    var providerID = $('#addpet').attr('data-id');

    if (name === "" || category === "" || breed === "" || gender === "" ||
        temperament === "" || photoURL === "") {
            console.log("something is empty");
        }
    else {
        console.log("everything is filled in");
        var pet = {
            name: name,
            category: category,
            breed: breed,
            gender: gender,
            temperament: parseInt(temperament),
            photoURL: photoURL,
            providerID: providerID
        }
        $.ajax({
            method: "POST",
            url: "/api/provider/addpet",
            data: pet
            })
            .then(function() {
                $('#name').val('');
                $('#category').val('Cat');
                $('#breed').val('');
                $("input[name='gender']").val(['Male']);
                $('#temperament').val('1');
                $('#photoURL').val('');
            });

    }
    console.log(category);
}

$addpet.on('click', addNewPet);