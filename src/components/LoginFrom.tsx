import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAuth } from "../config/Auth";
import { FormInputText } from "./FormInputText";
//declare prop types
interface LoginProps {
  formTitle?: string;
  fields?: Array<string>;
  description?: string | Array<string>;
  additionalContents?: Array<any>;
  getData: (values: any) => void;
  //   closeForm: boolean;
  customStyle?: any;
  logos?: Array<string>;
}

//component function
const LoginFrom = ({
  formTitle = "S'inscrire",
  fields = ["first_name", "last_name", "email"],
  description = "Register to get started, and get the chance to win a prize",
  additionalContents = [],
  getData,
  customStyle = undefined,
  logos = [],
  //   closeForm,
  ...rest
}: LoginProps) => {
  const [authError, setAuthError] = useState(null);
  const { user, signUp, signIn } = useAuth();
  //form input interface
  interface FormInputs {
    name: string;
    email: string;
    password: string;
  }
  //form input validation
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("nom est requis"),
      email: yup.string().email().required("l'e-mail est requis"),
      password: yup
        .string()
        .min(6, "mot de passe doit contenir au minimum 6 characteres")
        //    .test(
        //      "len",
        //      "mot de passe doit contenir au minimum 6 characteres",
        //      (val) => val.length > 6
        //    )
        .required(),
    })
    .required();

  //useform
  const { control, handleSubmit } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  //handle submit
  const onFormSubmit = async (data: FormInputs) => {
    getData(data);
    const { error } = await signUp({
      name: data.name,
      email: data.email,
      password: data.password,
      status: "ACTIVE",
    });
    if (error) {
      alert(error.message);
    }
    console.log(data);
  };

  return (
    <Card>
      <CardHeader title={formTitle} />
      <CardContent>
        <div>
          <FormInputText name="name" control={control} label="Nom" />
          <FormInputText name="email" control={control} label="Email" />
          <FormInputText
            name="password"
            type="password"
            control={control}
            label="Mot de passe"
          />
          <Button
            onClick={handleSubmit(onFormSubmit)}
            variant={"contained"}
            //style={styleSetting}
            // style={{ height: "100%", width: "30%", backgroundColor: "#2f9e44" }}
          >
            Connexion
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginFrom;
