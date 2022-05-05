import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

const schemaValidation = yup.object().shape({
    file: yup
        .mixed()
        .nullable()
        .required("You need to provide a file")
        .test("size", "File size is too large Min.100 kb", (value) => !value || (value && value[0]?.size <= 100000))
        .test(
            "format",
            "Unsupported File Format",
            (value) => !value || (value && SUPPORTED_FORMATS.includes(value[0]?.type))
        ),
});
export default schemaValidation;
