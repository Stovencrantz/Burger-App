// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {

    $(".create-form").on("submit", function(event) {
        //make sure to preventDefault on a submit event
        event.preventDefault();

        console.log("event: ", event);
        console.log($(".freshBurgers").children().length);
        // Validates that the user must enter a non-empty string for their answer to be posted and also allows a maximum of 4 fresh burgers to be present at one time
        if($("#burg").val().trim() !== "" && $(".freshBurgers").children().length < 4){
            var newBurger = {
                burger_name: $("#burg").val().trim(),
                devoured: 0
            };
                    //send the POST request
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                console.log("Created new burger");
                //reload the location to get the updated list
                location.reload();
            });
        }
    });

    $(".devourBtn").on("click", function(event) {
        console.log("event: ", event);
        console.log($(this).data("id"));

        var id = $(this).data("id");
        var devouredUpdate = {
            devoured: true
        };

        //Send the put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: devouredUpdate
        }).then(function() {
            console.log("Changed devour to: ", devouredUpdate);
            //reload the page
            location.reload();
        })

    })

    $(".clear-devoured").on("click", function(event) {

        $.ajax("/api/burgers", {
            type: "DELETE"
        }).then(function() {
            console.log("deleting devoured lsit")
            location.reload();
        });
    });
});