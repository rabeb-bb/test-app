import React, { useState } from "react";
import { AuthProvider } from "./config/Auth";
import { Signin } from "./components/Signin";
import { TestComp } from "./components/TestComp";
import LoginFrom from "./components/LoginFrom";

const App: React.FC = () => {
  const [userData, setuserData] = useState(null as any);
  const [closeForm, setCloseForm] = useState(false);
  return (
    <>
      <AuthProvider>
        {/* <TestComp /> */}
        <LoginFrom getData={setuserData} />
      </AuthProvider>
    </>
  );
};

export default App;
