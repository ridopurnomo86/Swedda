import * as yup from "yup";

const schemaValidation = yup.object().shape({
    email: yup.string().email("Must Containt Email").required(),
    gender: yup.string().required(),
    name: yup.string().required(),
    birth_date: yup.string().required(),
});
export default schemaValidation;
