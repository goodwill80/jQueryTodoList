$(document).ready(function () {

//check off a todo by clicking
$('ul').on ("click", "li", function(){
  $(this).toggleClass("completed");
});


//click on X to delete todo
$('ul').on ("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  //stop effect to parents
  event.stopPropagation();
});

//entering and appending new todo
$("input[type='text']").keypress( function(event){
  if(event.which === 13) {
    //grab todo text from input
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-android").click(function(){
  $("input[type='text']").fadeToggle();
})

















});
