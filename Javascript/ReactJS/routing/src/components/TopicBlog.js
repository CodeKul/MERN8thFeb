import React from "react";
import { useParams,useRouteMatch } from "react-router-dom";
function TopicBlog({topicList}) {
    const { path, url } = useRouteMatch();
    console.log(path,url)
  const { topicid } = useParams();
     console.log(topicList)

    const topicDetails = topicList.find((topicList)=>topicList.id === topicid)
    console.log(topicDetails)
  return (
    <div>
      <h1>{topicDetails.name}</h1>
      <h4>{topicDetails.id}</h4>
      <p>{topicDetails.description}</p>
    </div>
  );
}

export default TopicBlog;
