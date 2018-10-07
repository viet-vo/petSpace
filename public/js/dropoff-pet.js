
var markPetDroppedOff = function(event) { 
    console.log("here");
    var currentID = {
       id: $(this).attr('data-id'),
       pet_id: $(this).attr('pet-id')
    }
    $.ajax({
        method: "PUT",
        url: "/api/provider/dropoff",
        data: currentID
        })
        .then(function() {
            $.ajax({
                method: "PUT",
                url: "/api/pet/markavailable",
                data: currentID
                })
                .then(function() {
                    window.location.replace("/provider/" + $('#prvdr').attr('data-id') + "/petsforreturn");
                });
        });

}

$(document).on('click', '.btn', markPetDroppedOff);