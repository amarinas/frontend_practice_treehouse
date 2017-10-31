//Problem: not compatible for small browser. small devices
//solution: to hide the text links and swap them out with a more nicer navigation

//create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);

  // create option
  var $option = $("<option></option>");

//Deal with selected options depending on current page
if ($anchor.parent().hasClass("selected")){
  $option.prop("selected", true);
}
  //options value is the href
  $option.val($anchor.attr("href"));
  // option text is the text of links
  $option.text($anchor.text());
  // append option to select
  $select.append($option);
});

// //Create button to click to go to selects location
// var $button = $("<button>Go</button>");
// $("#menu").append($button);
// //bind click to button
// $button.click(function(){
//   //go to selects locations
//   window.location = $select.val();
//
// });

//change on select to go to selects location
$select.change(function(){
  //go to selects locations
  window.location = $select.val();

});
