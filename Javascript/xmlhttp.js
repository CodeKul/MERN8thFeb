function getData() {
  let postId = document.getElementById("postId").value;
  let name = document.getElementById("fname").value;
  let mail = document.getElementById("mail").value;
  let comment = document.getElementById("comment").value;

  let comments = {
    postId: postId,
    name: name,
    email: mail,
    comment: comment,
  };
  return comments;
}

function sendComment() {
  //1)Create object of XMLHttpRequest
  //2)obj.open("method","url")
  //3)obj.setRequestHeader("Content-type")
  //4)obj.send(body)
  //5)obj.onload,onerror
  let commentData = getData();
  let req = new XMLHttpRequest();
  req.open("POST", "https://jsonplaceholder.typicode.com/comments");
  req.setRequestHeader("Content-type", "application/json");
  req.send(JSON.stringify(commentData));
  req.onload = function () {
    if (req.status == 201) {
      console.log(req.response);
    } else {
      console.log(req.status);
    }
  };
  req.onerror = function () {
    console.log("Network Error.Please try again");
  };
}

function getComments() {
  let getRequest = new XMLHttpRequest();
  getRequest.open("GET", "https://jsonplaceholder.typicode.com/comments");
  getRequest.setRequestHeader("Content-type", "application/json");
  getRequest.send();
  getRequest.onload = function () {
    if (getRequest.status == 200) {
      let result = getRequest.response;
      let finalResult = JSON.parse(result);

      let tblOutput = `<table>
            <tr>
              <th>ID</th>
              <th>Post id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>`;
      finalResult.map((item) => {
        tblOutput += `<tr>
          <td>${item.id}</td>
          <td>${item.postId}</td>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.body}</td>
        </tr>`;
      });
      console.log(tblOutput);
      document.getElementById("comments").innerHTML = tblOutput;
    } else {
      console.log(getRequest.status);
    }
  };
}
