/// check off specific todos by clicking.
$("ul").on("click", "li",function(){
$(this).toggleClass("completed");
});

//delete specific todos by clicking on span.
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut("slow", function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//add new todos bij typing in he text input.
$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    //grab text input
    var todotext = $(this).val();
    $(this).val("");
    $("ul").prepend("<li>" + "<span>" + "<i class='fa fa-trash' aria-hidden='true'></i>  " + "</span>" + todotext + "</li>");
  }
});

$(".fa-plus-circle").click(function(){
  $("input[type='text']").fadeToggle();
});

// ontworpen door craig
// silince is golden !
