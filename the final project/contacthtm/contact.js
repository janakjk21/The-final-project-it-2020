function validate() {
  var name = document.f1.Name.value;
  var password = document.f1.password.value;
  var status = false;

  if (name.length < 1) {
    document.getElementById("nameloc").innerHTML =
      " <img src='unchecked.gif'/> Please enter your name";
    status = false;
  } else {
    document.getElementById("nameloc").innerHTML = " <img src='checked.gif'/>";
    status = true;
  }
  if (password.length < 6) {
    document.getElementById("passwordloc").innerHTML =
      " <img src='unchecked.gif'/> Password must be at least 6 char long";
    status = false;
  } else {
    document.getElementById("passwordloc").innerHTML = " <img src='checked.gif'/>";
  }
  return status;
}