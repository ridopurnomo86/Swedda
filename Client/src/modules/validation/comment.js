import * as yup from "yup";

const schemaValidation = yup.object().shape({
    title: yup.string().required,
    comment: yup.string().required,
});
export default schemaValidation;
