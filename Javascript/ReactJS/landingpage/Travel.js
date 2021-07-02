import React, { useState } from "react";
import sea from "./sea.mp4";
import forest from "./forest.mp4";
import "./Travel.css";
function Travel() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <>
      <section className={`travel ${isActive ? "active" : ""}`}>
        <header>
          <h2 className="logo">Travel</h2>
          <div className="icon">
            <i
              className={isActive ? "fas fa-times" : "fas fa-bars"}
              onClick={() => setIsActive(!isActive)}
            ></i>
          </div>
        </header>

        <video src={sea} type="video/mp4" controls autoPlay={true} muted loop />

        <div className="overlay"></div>
        <div className="text">
          <h2>Adventure Awaits</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            vero aspernatur dolores! Porro quo culpa sit dignissimos asperiore
            quam, officia modi laudantium officiis consequuntur accusamus itaque
            voluptas temporibus?
          </p>
          <a href="#">Explore</a>
        </div>
        <ul className="social">
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
        </ul>
      </section>
      <div className={`menu ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Travel;
