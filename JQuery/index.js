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

// assign src of the image to img tag in html. this will override the src in html if there is any
$("img").attr("src", "")

// assign href inside javascript, not html. this will override the href in html if there is any
$("a").attr("href", "https://www.instagram.com/abqoryy");