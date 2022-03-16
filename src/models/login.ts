//declare prop types
export interface LoginProps {
  formTitle?: string;
  fields?: Array<string>;
  description?: string | Array<string>;
  additionalContents?: Array<any>;
  getData?: (values: any) => void;
  customStyle?: any;
  logos?: Array<string>;
}

//form input interface
export interface FormInputs {
  email?: string;
  password?: string;
  name?: string;
  status?: string;
  handleSubmit?: any;
  onFormSubmit?: any;
  control?: any;
}
