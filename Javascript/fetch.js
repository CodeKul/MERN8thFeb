function getUserData() {
  let userId = document.getElementById("userId").value;
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  let user = {
    userId: userId,
    title: title,
    body: body,
  };
  //console.log(user);
  return user;
}

function sendData() {
  let userData = getUserData();
  let p = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  });
  p.then(function (response) {
    console.log(response.json());
  }).catch(function (errMsg) {
    console.log(errMsg);
  });
  console.log(p);
}

function getData() {
  let getPromise = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  console.log(getPromise);

  getPromise
    .then(function (response) {
      let output = response.json();
      return output;
    })
    .then(function (output) {});
}
