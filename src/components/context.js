import React, { useContext, useState } from "react";
import { NameContext } from "../index";

function Context() {
  const { trees } = useContext(NameContext);
  return (
    <div className="">
      <p>context demo</p>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>tree name : {tree.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default Context;
