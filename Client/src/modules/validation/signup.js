import * as yup from "yup";

const schemaValidation = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email("Must Containt Email").required(),
    password: yup.string().required(),
});

export default schemaValidation;
