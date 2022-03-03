import React, { useState } from "react";
import { AuthProvider } from "./config/Auth";
import { Signin } from "./components/Signin";
import { TestComp } from "./components/TestComp";
import LoginFrom from "./components/LoginFrom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//setting up client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const App: React.FC = () => {
  const [userData, setuserData] = useState(null as any);
  const [closeForm, setCloseForm] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* <TestComp /> */}
        <LoginFrom getData={setuserData} />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
