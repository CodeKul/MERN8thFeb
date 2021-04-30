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
  let commentData = getData();
  let p = axios.post(
    "https://jsonplaceholder.typicode.com/comments",
    commentData,
    { headers: { "Content-type": "application/json" } }
  );
  p.then((response) => {
    console.log(response.data);
  });
}

