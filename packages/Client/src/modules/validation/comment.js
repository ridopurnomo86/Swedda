import { object, string } from "yup";

const schemaValidation = object().shape({
    title: string().required,
    comment: string().required,
});
export default schemaValidation;
