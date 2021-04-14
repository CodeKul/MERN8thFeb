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
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  p.then(function (response) {
    console.log(response.json());
  }).catch(function (err) {
    console.log(err);
  });
}

function getData() {
  let p = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  p.then(function (response) {
    let result = response.json();
    return result;
  }).then(function (result) {
    let output = `<table id="tb">
                  <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>title</th>
                    <th>body</th>
                  </tr>`;
    result.map(
      (item) =>
        (output += `<tr>
            <td>${item.id}</td>
            <td>${item.userId}</td>
            
            <td>${item.title}</td>
            <td>${item.body}</td>
          </tr>`)
    );
    document.getElementById("tblData").innerHTML = output;
    // document.getElementById("tb").style.border = "1px solid black";
  });
}
