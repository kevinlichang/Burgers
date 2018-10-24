$(function() {
  $(".change-to-devoured").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured: true}
    }).then(
      function() {
        console.log("Ate Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(data) {
        console.log(`created new burger called ${data.burger_name}`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
