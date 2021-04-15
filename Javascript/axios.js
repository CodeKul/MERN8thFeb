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
  let data = getUserData();
  console.log(data);
  axios
    .post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(data), {
      "Content-type": "application/json",
    })
    .then(function (response) {
      console.log(response);
      let x = response.data;
    })
    .catch(function (msg) {
      console.log(msg);
    });
  //console.log(x);
}
