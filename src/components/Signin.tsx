import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import styles from "./index.module.scss";
import { FormInputText } from "./FormInputText";

interface RegisterProps {
  formTitle?: string;
  fields?: Array<string>;
  description?: string | Array<string>;
  additionalContents?: Array<any>;
  getData: (values: any) => void;
  closeForm: boolean;
  customStyle?: any;
  logos?: Array<string>;
}

export const Signin = ({
  formTitle = "Register",
  fields = ["first_name", "last_name", "email"],
  description = "Register to get started, and get the chance to win a prize",
  additionalContents = [],
  getData,
  customStyle = undefined,
  logos = [],
  closeForm,
  ...rest
}: RegisterProps) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = (event: any, reason: any) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  interface IFormInputs {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
  }

  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required("Le prénom est requis"),
      lastName: yup.string().required("le nom de famille est requis"),
      email: yup.string().email().required("l'e-mail est requis"),
      phone: yup
        .number()
        .integer()
        .min(20000000, "doit être un numéro valide")
        .required(),
    })
    .required();

  const {
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = (data: IFormInputs) => {
    getData(data);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    setOpen(!closeForm);
  }, [closeForm]);

  var styleSetting = {} as React.CSSProperties;

  if (customStyle.mainColor) {
    styleSetting["backgroundColor"] = customStyle.mainColor;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown={true}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth="md"
      // className={styles.dialog}
    >
      {/* <DialogTitle>{formTitle}</DialogTitle> */}
      <DialogContent>
        {logos.length > 0 && (
          <div
          // className={styles.logos}
          >
            {logos.map((logo) => (
              <img src={logo} alt="company logo" />
            ))}
          </div>
        )}
        <h2
        // className={styles.title}
        >
          {formTitle}
        </h2>
        <DialogContentText marginBottom="20px">{description}</DialogContentText>
        <DialogContentText marginBottom="20px">
          {additionalContents.map((txt: any, index: number) => (
            <i key={index}>
              {txt.content}
              <br />
            </i>
          ))}
        </DialogContentText>
        <FormInputText name="firstName" control={control} label="Prénom" />
        <FormInputText name="lastName" control={control} label="Nom" />
        <FormInputText name="email" control={control} label="Email" />
        <FormInputText
          name="phone"
          control={control}
          label="Numéro de téléphone"
          type="number"
        />
      </DialogContent>
      <DialogActions style={{ paddingRight: 24, justifyContent: "center" }}>
        <Button
          onClick={handleSubmit(onFormSubmit)}
          variant={"contained"}
          //style={styleSetting}
          style={{ height: "100%", width: "30%", backgroundColor: "#2f9e44" }}
        >
          Jouer
        </Button>
      </DialogActions>
    </Dialog>
  );
};
