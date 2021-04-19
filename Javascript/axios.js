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

function getData() {
  let p = axios.get("https://jsonplaceholder.typicode.com/posts", {
    "Content-type": "application/json",
  });
  console.log(p);
  p.then(function (response) {
    let result = response.data;
    return result;
  }).then(function (result) {
    let output = `<ul>`;
    result.map((item, id) => {
      output += `<li>${item.userId}</li>
              <li>${item.title}</li>`;
    });
    document.getElementById("tblData").innerHTML = output;
  });
}
