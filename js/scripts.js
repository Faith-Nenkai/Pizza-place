document.forms['form'].addEventListener('submit', function (event) {
  event.preventDefault();
});
function checkBlank() {
  var name = document.forms['form'].elements[0].value;
  var email = document.forms['form'].elements[1].value;
  if (name == "" && email == "") {
    alert("Enter your details");
  }
  else if (name == "") {
    alert("Enter a valid name");
  }
  else if (email == "") {
    alert("Please enter a valid email");
  }
  else {
    alert("Dear " + name + "Thank you.Your feedback has been successfully submitted");
    document.getElementById('para').innerHTML = "Dear " + name + " Your feedback was successfully submitted.Thank you."
  }
}