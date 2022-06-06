import React, {useState} from "react";

function About({childToParent}) {
  return (
    <div className="">
      <button onClick={()=>{ childToParent('child')}} >pass data from child component</button>
    </div>
  );
}

export default About;
