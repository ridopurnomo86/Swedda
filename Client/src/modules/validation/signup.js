import { object, string } from "yup";

const schemaValidation = object().shape({
    username: string().required(),
    email: string().email("Must Containt Email").required(),
    password: string().required(),
});

export default schemaValidation;
