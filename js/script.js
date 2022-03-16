


$(document).ready(function (){
   $(".iconA").click(function(){
       $(".iconA").toggle();
       $(".pIconA").toggle();
   }) 

   $(".pIconA").click(function(){
    $(".pIconA").toggle();
    $(".iconA").toggle();
}) 

$(".iconB").click(function(){
    $(".iconB").toggle();
    $(".pIconB").toggle();
}) 

$(".pIconB").click(function(){
 $(".pIconB").toggle();
 $(".iconB").toggle();
}) 

$(".iconC").click(function(){
    $(".iconC").toggle();
    $(".pIconC").toggle();
}) 

$(".pIconC").click(function(){
 $(".pIconC").toggle();
 $(".iconC").toggle();
}) 
})


// $('.img1').mouseenter(function(){
//     $('.img1Name').filter('#img1Name1').show("show");
// }).mouseleave(function(){
//     $('#img1Name1').hide("show");
// })


$('.imageOne').mouseover(function(){
    $('#img1P').show();
}) .mouseout(function(){
    $('#img1P').hide();
})


$('.imageTwo').mouseover(function(){
    $('#img2P').show();
}) .mouseout(function(){
    $('#img2P').hide();
})


$('.imageThree').mouseover(function(){
    $('#img3P').show();
}) .mouseout(function(){
    $('#img3P').hide();
})


$('.imageFour').mouseover(function(){
    $('#img4P').show();
}) .mouseout(function(){
    $('#img4P').hide();
})


$('.imageFive').mouseover(function(){
    $('#img5P').show();
}) .mouseout(function(){
    $('#img5P').hide();
})


$('.imageSix').mouseover(function(){
    $('#img6P').show();
}) .mouseout(function(){
    $('#img6P').hide();

    
})



$('.imageSeven').mouseover(function(){
    $('#img7P').show();
}) .mouseout(function(){
    $('#img7P').hide();
})


$('.imageEight').mouseover(function(){
    $('#img8P').show();
}) .mouseout(function(){
    $('#img8P').hide();
})


$(document).ready(function() {
    $("form#formm").submit(function(event) {
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("").val();
        if ($("input#name").val() && $("input#email").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your Name and Email");
        }
    });
});
function myFunction() {
}















  


        