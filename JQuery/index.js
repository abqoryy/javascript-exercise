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

// prepend, append; using it for adding element inside another element
// prepend will add element inside the selected element, before the existing content
// append will add element inside the selected element, after the existing content
// in this case, adding h3 inside h2, before and after the existing content

$("button").on("click", function() {
    $("h2").prepend("<h3>You Clicked it, this is PREPEND appear above!</h3>");
    $("h2").append("<h3>You Clicked it, this is APPEND appear below!</h3>");

    setTimeout(() => {
        $("h3").remove();
    },1000);
});

// before, after; using it for adding element outside another element
// before will add element outside the selected element, before the existing content
// after will add element outside the selected element, after the existing content
// in this case, adding h3 outside h2, before and after the existing content

$("button").on("click", function() {
    // modern usage use BACKTICK in this case to closed the button tag, so the id can be use ""
    $("h1").before(`<button id="before">You Clicked it, this is BEFORE appear above!</button>`);
    $("h1").after(`<button id="after">You Clicked it, this is AFTER appear below!</button>`);

    setTimeout(() => {
        $("#before, #after").remove();
    },1000);
});

// simple animation with jQuery
$("#animation_header").addClass("big-title margin-50 padding-50");

$("#animation1").on("click", function() {
    $("#animation_header").slideUp().slideDown().animate({opacity: 0.5});
    setTimeout(() => {
        $("#animation_header").animate({opacity: 1});
        $("#animation1").removeClass("button-clicked").html("Click to see animation");
        $("#animation2").removeClass("button-clicked").html("Click to hide and show button");
    },1000);
});

// slideUp, slideDown, slideToggle
// other animation example: fadeIn, fadeOut, fadeToggle, fadeTo
// animate({}) only works with numeric properties like width, height, opacity, margin, padding, etc.
// non-numeric properties like color, background-color, font-size, etc. cannot be animated with animate({})
// complete guide can be found at: https://api.jquery.com/animate/ 
// or https://www.w3schools.com/jquery/jquery_animate.asp

// $("#animation2").on("click", function() {
//     $("#animation_header").hide();
//     setTimeout(() => {
//         $("#animation_header").show();
//         $("#animation2").removeClass("button-clicked").html("Click to hide button");
//     },1000);
// });

$("#animation2").on("click", function() {
     $("#animation_header").toggle();
     setTimeout(() => {
        $("#animation1").removeClass("button-clicked").html("Click to see animation");
        $("#animation2").removeClass("button-clicked").html("Click to hide and show button");
     },1000);
});
   