import { Button } from "@mui/material";
import { FormInputs } from "../models/login";
import { FormInputText } from "./FormInputText";

const Login = ({ handleSubmit, onFormSubmit, control }: FormInputs) => {
  return (
    <div>
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

export default Login;
