// prevent spoiler

//1. hide the spoiler
$(".spoiler span").hide();
//2. add a button
$(".spoiler").append("<button> Reveal Spoiler! </button>");
// 3. when button pressed
$("button").click(function(){
  //3.1 show spoiler
  $(this).prev().show();
  // $(".spoiler span").show();
  //3.2 remove button
  $(this).remove();
});
