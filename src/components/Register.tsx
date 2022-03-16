import { Button } from "@mui/material";
import { useAuth } from "../config/Auth";
import { FormInputs } from "../models/login";
import { FormInputText } from "./FormInputText";

const Register = ({ handleSubmit, onFormSubmit, control }: FormInputs) => {
  const { signUp } = useAuth();
  return (
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
        style={{
          display: " block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Connexion
      </Button>
    </div>
  );
};

export default Register;
