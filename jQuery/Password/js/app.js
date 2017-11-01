

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid(){
  return $password.val().length >8;
}

function passwordMatch(){
  return $password.val() === $confirmPassword.val();
}

function canSubmit(){
  return isPasswordValid() && passwordMatch();
}
function passwordEvent(){
  if(isPasswordValid()){
      //password valid not show
      $password.next().hide();
  }else{
      //if not valid then show
      $password.next().show();

  }
}

function confirmPasswordEvent(){
  //when event happens on confirmation
  if(passwordMatch()){
    // hide if correct
    $confirmPassword.next().hide();
  }else{
      //show if incorrect
    $confirmPassword.next().show();

  }

}

function enableSubmit(){
  $("#submit").prop("disabled", !canSubmit());

}
//when even happens when password input
$password.focus(passwordEvent).keyup(passwordEvent)
         .keyup(confirmPasswordEvent).keyup(enableSubmit);
// find out if password and confirmation is match
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmit);


enableSubmit();
