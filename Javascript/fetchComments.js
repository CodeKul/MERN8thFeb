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
  });
  console.log(p);
}
