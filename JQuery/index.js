// add class seperately not chaining css with html
$("h1").addClass("big-title red margin-50 padding-50");

/**
 *  if css already in html and want to remove it with certain condition
 *  if there is h1 with big title class, remove red from it.
 *  not selectin all h1, just the one with big-title class
 */

// add event listener to modified with timeout to get back to previous state
$("h1").click(function() {
    $("h1").hasClass("big-title") && $("h1").removeClass("red").text("CLicked!")
    setTimeout(function() {
        $("h1").text("Hello").addClass("red");
    },1000)
})

$("button").addClass("margin-50");

//event listener to buttons
$("button").on("click", function() {
    $(this)
    .addClass("button-clicked")
    .html("<em>Clicked!</em>");

    $("h1").css("color", "purple");
    
    setTimeout(() => {
        $(this)
        .removeClass("button-clicked")
        .html("Click to change color");

        // to remove css from .css earlier, either set it to "" or use .removeAttr
        $("h1").css("color", "");
        $("h1").removeAttr("style");
    }, 1000);

});
// another version from the above, but this will apply to all buttons instead of just the clicked one
$("button").click(function() {
    $("button").addClass("button-clicked").html("<em>CLicked!</em>"); // using innerHtml
    $("h1").css("color", "purple");
    
    setTimeout(function(){
        $("button").removeClass("button-clicked").html("CLick to chage color");

        // to remove css from .css earlier, either set it to "" or use .removeAttr
        $("h1").css("color", "");
        $("h1").removeAttr("style");
    },1000);

});

// assign src of the image to img tag in html. this will override the src in html if there is any
$("img").attr("src", "")

// assign href inside javascript, not html. this will override the href in html if there is any
$("a").attr("href", "https://www.instagram.com/abqoryy");

// if pressed a key inside html document, the h1 will change based on the key pressed (using keydown for modern jQ)
$(document).on("keydown", function(event) {
    $("h1").text(event.key);

    setTimeout(() => {
        $("h1").text("Hello");
    }, 1000);
});

// change color if mouse hover on h1
$("h1").on("mouseover", function() {
    $("h1").addClass("cyan");

    setTimeout(() => {
        $("h1").removeClass("cyan");
    },500);
});