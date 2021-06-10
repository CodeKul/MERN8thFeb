import React from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import TopicBlog from "./TopicBlog";
function Topics() {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  let topics = [
    {
      name: "React JS",
      id: "react",
      description: "Front end Library",
    },
    {
      name: "Layout in CSS",
      id: "css-layout",
      description: "Flex and Grid",
    },
    {
      name: "React Router",
      id: "reactrouter",
      description: "It has Route,Link,Switch",
    },
    {
      name: "Conditional Rendering",
      id: "condtionrendering",
      description:
        "depending on the value of the state it renders data conditionally",
    },
  ];
  return (
    <div>
      {topics.map((topic) => (
        <div>
          <Link to={`${url}/${topic.id}`} style={{ textDecoration: "none" }}>
            {topic.name}
          </Link>
        </div>
      ))}

      <Route path={`${path}/:topicid`}>
        <TopicBlog topicList={topics} />
      </Route>
    </div>
  );
}

export default Topics;
