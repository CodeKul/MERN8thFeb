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
  let commentObj = getData();
  console.log(commentObj);
  let p = fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    body: JSON.stringify(commentObj), //converting js object to JSON
    headers: { "Content-type": "application/json" },
  });
  p.then(function (response) {
    console.log(response.json()); //converting JSON to js object
  }).catch(function (errMsg) {
    console.log(errMsg);
  });
  console.log(p);
}

function getComments() {
  let p = fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  p.then((response) => {
    let result = response.json();
    console.log(result);
    return result;
  })
    .then((result) => {
      let commentsTable = `<table>
          <tr>
            <th>ID</th>
            <th>Post Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
          `;
      result.map((cmt) => {
        commentsTable += `<tr>
                <td>${cmt.id}</td>
               <td>${cmt.postId}</td>
               <td>${cmt.name}</td>
               <td>${cmt.email}</td>
               <td>${cmt.body}</td>
            </tr>`;
      });

      document.getElementById("comments").innerHTML = commentsTable;
    })
    .catch(function (errMsg) {
      console.log(errMsg);
    });
  console.log(p);
}
