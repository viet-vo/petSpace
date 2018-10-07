var $addpet = $('#addpet');

var addNewPet = function(event) {
    event.preventDefault();
    $('#msg').text("");

    var name = $('#name').val().trim();
    var category = $('#category').val();
    var breed = $('#breed').val().trim();
    var gender = $("input[name='gender']:checked").val();
    var temperament = $('#temperament').val();
    var photoURL = $('#photoURL').val().trim();
    var providerID = $('#addpet').attr('data-id');

    if (name === "" || category === "" || breed === "" || gender === "" ||
        temperament === "" || photoURL === "") {
            $('#msg').text("Please fill in all the fields.");
        }
    else {
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
}

$addpet.on('click', addNewPet);