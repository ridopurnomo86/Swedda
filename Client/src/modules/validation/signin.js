import { object, string } from "yup";

const schemaValidation = object().shape({
    email: string().email("Must Containt Email").required(),
    password: string().required(),
});
export default schemaValidation;
