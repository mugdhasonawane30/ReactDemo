import React, { useState } from "react";
import About from "./about";

function Home() {
  const [data, setData] = useState('Parent'); 
  const childToParent = (data) => {
    setData(data);
  }
  return (
    <div className="">
      <p>Pass data from child to parent component</p>
      {data}
      <About childToParent={childToParent}/>
    </div>
  );
}

export default Home;
