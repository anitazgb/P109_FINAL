function validateForm() {
  var name = document.forms["myContact"]["name"].value;
  var email = document.forms["myContact"]["email"].value;
  var comment = document.forms["myContact"]["comment"].value;

  if (name == "" || email == "" || comment == "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Email format validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Open 'My personal interest' page by clicking 'My "own" creative' button on 'About' page
document.getElementById("interestsButton").addEventListener("click", function () {
  window.location.href = "interests.html";
});