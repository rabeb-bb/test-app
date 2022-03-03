import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { supabase } from "../config/supabase";

interface User {
  name: string;
  email: string;
  password: string;
  status: string;
}

//communicating with supabase
const createUser = async (client: User) => {
  // Check if username exists
  const { data: userWithUsername } = await supabase
    .from("users")
    .select("*")
    .eq("email", client.email)
    .single();

  if (userWithUsername) {
    throw new Error("User with username exists");
  }

  const { user, error: signUpError } = await supabase.auth.signUp({
    email: client.email,
    password: client.password,
  });

  if (signUpError) {
    throw signUpError;
  }

  return user;
};
const useCreateClient = (client: User) => {
  return useMutation(() => createUser(client), {
    onSuccess: async (user) => {
      const { data: insertData, error: insertError } = await supabase
        .from("users")
        .insert({
          name: client.name,
          email: client.email,
          status: "active",
        });

      if (insertError) {
        throw insertError;
      }

      return insertData;
    },
  });
};

export default useCreateClient;
