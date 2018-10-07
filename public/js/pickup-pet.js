
var markPetPickedUp = function(event) { 
    console.log("here");
    var currentID = {
        id: $(this).attr('data-id')
    }
    $.ajax({
        method: "PUT",
        url: "/api/provider/pickup",
        data: currentID
        })
        .then(function() {
            window.location.replace("/provider/" + $('#prvdr').attr('data-id') + "/petsforpickup");
        });

}

$(document).on('click', '.btn', markPetPickedUp);