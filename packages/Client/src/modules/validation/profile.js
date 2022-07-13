import { object, string } from "yup";

const schemaValidation = object().shape({
    email: string().email("Must Containt Email").required(),
    gender: string().required(),
    name: string().required(),
    birth_date: string().required(),
});
export default schemaValidation;
