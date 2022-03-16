import React, { useState } from "react";
import { LoginProps } from "../models/login";

const Test = ({
  formTitle = "Se connecter",
  fields = ["name", "email", "status"],
  getData,
  customStyle = undefined,
  ...rest
}: LoginProps) => {
  const [test, settest] = useState(false);
  const handleChange = () => {
    settest(!test);
  };

  return (
    <div>
      {test ? <h2>truthy </h2> : <h2>falsy</h2>}
      <button onClick={handleChange}>change</button>
    </div>
  );
};

export default Test;
