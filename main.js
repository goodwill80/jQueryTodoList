$(document).ready(function () {

//check off a todo by clicking
$('li').click(function(){
  $(this).toggleClass("completed");
  //ALTERNATIVE
  // if ($(this).css("color") === "rgb(128, 128, 128)") {
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   })
  // } else {
  //   $(this).css({
  //     color: "grey",
  //     textDecoration: "line-through"
  //   });
  // }
});























});
