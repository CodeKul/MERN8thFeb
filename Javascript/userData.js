function getData() {
  var firstName = document.getElementById("fname").value;
  console.log(firstName);
  var email = document.getElementById("mail").value;
  console.log(email);
  var gender = document.getElementsByName("gender");
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      var g = gender[i].value;
      console.log(gender[i]);
    }
  }
  console.log(g);

  let checkedResult = document.getElementById("opt").checked;
  let status;
  if (checkedResult) {
    status = document.getElementById("opt").value;
  } else {
    status = document.getElementById("opt").value = "No";
  }

  console.log(status);

  var city = document.getElementById("cityId").value;
  console.log(city);

  let user = {
    firstName: firstName,
    email: email,
    gender: g,
    status: status,
    city: city,
  };

  console.log(user);
}
