import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

//creating context for authentifation
const AuthContext = createContext<any | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactElement;
}
//export the authentication provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  //creating state value for user and loading data
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //getting session data if there is an active
    const session: any = supabase.auth.session();
    setUser(session?.user ?? null); //object?.attribute used to avoid the empty object error , the double ?? replaces || for or
    setLoading(false);
    //listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session: any) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
    return () => {
      listener?.unsubscribe();
    };
  }, []);
  //create signup, signin, signout functions

  const value = {
    signUp: (data: any) => supabase.auth.signUp(data),
    signIn: (data: any) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };
  //use a provider to pass dwn the value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

//export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
