//  $("li").click(function(){

//   if($(this).css("color") === "rgb(128, 128, 128)"){
//      $(this).css({
//     color: "black",
//     textDecoration: "none",
// });
// } else {
//     $(this).css({
//     color: "gray",
//     textDecoration: "line-through",
// });
// }
// })

$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
})

$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove()
    });
})
$("input").keypress(function(event){
    if(event.which === 13){

        let itemText = $(this).val();
        $(this).val(" ");
        $("ul").append("<li><span>x</span> " + itemText + "</li>");
    }
})

$("h2 span").click(function(){
    $("input").fadeToggle();
})
