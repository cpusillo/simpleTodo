
/* Add ul listener to the entire ul parent
   So that we can apply our future actions
   to newly created li. Use .on to allow
   access to present & future elements.
*/

// Run this code only when an li inside the ul has been clicked.
$("ul").on("click", "li", function(){
    // Check off specific todos by clicking on li.
    $(this).toggleClass("completed");
});


// Run this code only when a span inside the ul has been clicked.
$("ul").on("click", "span", function(event){
    //Remove the entire li when 'X is clicked.
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    // Stop the click from moving onto the li listener:
        event.stopPropagation(); 
});

// Define our textbox input properties.
$("input[type='text']").keypress(function(event){
    // Check to see if the user pressed the enter key (13).
    if(event.which === 13){
        // Grab new todo from user input.
        var todoText = $(this).val();

        // Append the user input to the existing ul list elements.
        $("ul").append(`<li><span class="material-icons">delete</span> ${todoText}</li>`)
        // Clear the input box text.
        $(this).val("");
    }
});

$("#togglePlus").click(function (){
    $("input[type='text']").fadeToggle();
})