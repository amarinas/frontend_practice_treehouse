

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function passwordEvent(){
  if($password.val().length >8){
      //password valid not show
      $password.next().hide();
  }else{
      //if not valid then show
      $password.next().show();

  }
}

function confirmPasswordEvent(){
  //when event happens on confirmation
  if($password.val() === $confirmPassword.val()){
    // hide if correct
    $confirmPassword.next().hide();
  }else{
      //show if incorrect
    $confirmPassword.next().show();

  }





}
//when even happens when password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
// find out if password and confirmation is match
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
