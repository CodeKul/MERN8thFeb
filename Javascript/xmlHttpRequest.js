function getData() {
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
  // 1)Create object of XMLHttpRequest
  // 2)obj.open(http,url)
  //3)obj.setRequestHeader("Content-type","application/json")
  //4)obj.send(data)
  //5)obj.onload,obj.onerror
  let userData = getData();
  let xmlRequest = new XMLHttpRequest();
  xmlRequest.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xmlRequest.setRequestHeader("Content-type", "application/json");
  xmlRequest.send(JSON.stringify(userData));
  xmlRequest.onload = function () {
    if (xmlRequest.status == 201) {
      console.log(xmlRequest.response);
    } else {
      console.log("Response status code" + xmlRequest.status);
    }
  };

  xmlRequest.onerror = function () {
    console.log("Network error");
  };
}
