import React from "react";
import classes from "./ExternalCSS.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function ExternalCSS() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit
        voluptate nisi neque, vitae quidem corrupti sint ex amet dolor ipsum
        esse rerum maxime libero quam ad nulla soluta id mollitia commodi facere
        vero accusantium! Incidunt enim quae nemo impedit!
      </p>
      <button class={`${classes.button} p-5`}>Read More</button>
      <button class="btn btn-primary">Primary</button>
    </div>
  );
}

export default ExternalCSS;
