// add class seperately not chaining css with html
$("h1").addClass("big-title red");

/**
 *  if css already in html and want to remove it with certain condition
 *  if there is h1 with big title class, remove red from it.
 *  not selectin all h1, just the one with big-title class
 */
// modified with timeout to get back to previous state
$("h1").click(function() {
    $("h1").hasClass("big-title") && $("h1").removeClass("red").text("CLicked!")
    setTimeout(function() {
        $("h1").text("Hello").addClass("red");
    },1000)
})

//event listener to buttons
$("button").addClass("margin-50").click(function() {
    $("button").addClass("button-clicked padding-50").html("<em>CLicked!</em>"); // using innerHtml
    setTimeout(function(){
        $("button").removeClass("button-clicked padding-50").html("CLick This");
    },1000)
});