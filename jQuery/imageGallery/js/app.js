// problem: user chen clicking on image goes dead end
//solution: create an overlay with the large image- lightbox

//1. Capture click event on link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var href = $(this).attr("href");
  console.log(href);

  //1.1 show overlay
  //1.2 update overlay with the image linked in the link
  //1.3 get child's alt attribute and set caption
});
//2. add overlay
  //2.1 add image
  //2.2 add caption
//3. when overlay is clicked
  // 3.1 hide overlay
