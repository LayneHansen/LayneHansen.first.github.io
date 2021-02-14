// First Name field

// Last Name field

// Email field

// Text field 

$("#contact-submit").on(click, function () {
    event.preventDefault();

    firstName = $("#first-name").val().trim();
    console.log(firstName)
    lastName = $("#last-name").val().trim();
    email = $("#email").val().trim();
    textArea = $("#text-area").val().trim();
})