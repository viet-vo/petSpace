
var reservePet = function(event) { 
    console.log("here");
    var petTransaction = {
        pet_id: $(this).attr('data-id'),
        pet_name: $(this).attr('pet-name'),
        borrower_id: $('#brwr').attr('data-id'),
        provider_id: $(this).attr('prov-id')
    }
    console.log(petTransaction);
    $.ajax({
        method: "POST",
        url: "/api/borrower/reservation",
        data: petTransaction
        })
        .then(function() {
            $.ajax({
                method: "PUT",
                url: "/api/borrower/reservation",
                data: petTransaction
                })
                .then(function() {
                    
                    window.location.replace("/borrower/" + $('#brwr').attr('data-id') + "/transactions");
                });
        });

}

$(document).on('click', '.btn', reservePet);