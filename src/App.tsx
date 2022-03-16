import React, { useState } from "react";
import { AuthProvider } from "./config/Auth";
// import { Signin } from "./components/Signin";
// import { TestComp } from "./components/TestComp";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SignupFrom from "./components/SignupForm";
import Navbar from "./app/component/navigation/Navbar";
import Sidebar from "./app/component/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Subscriptions from "./components/screens/Subscriptions";
import Setting from "./components/screens/Setting";
import Profile from "./components/screens/Profile";
import Support from "./components/screens/Support";

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
        <Router>
          {/* <Navbar /> */}
          <Sidebar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
        {/* <SignupFrom getData={setuserData} /> */}
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
