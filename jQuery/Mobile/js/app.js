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

  //options value is the href
  // option text is the text of links
  $option.text($anchor.text());
  // append option to select

  $select.append($option);
})


//Create button to click to go to selects location
//bink click to button
   //go to selects locations
//modify Css to hide links on small resolution and show button and select
  //also hides select and button on larger resolution and show links
//Deal with selected options depending on current page
