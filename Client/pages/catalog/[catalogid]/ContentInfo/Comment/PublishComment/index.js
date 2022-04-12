import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import usePOST from "../../../../../api/usePOST";
import CircularLoading from "../../../../../../src/components/CircularLoading";
import PublishCommentContainer from "./styles";
import Form from "../../../../../../src/components/Form";
import Button from "../../../../../../src/components/Button";

const PublishComment = ({ catalogid }) => {
    const [isPOSTING, setIsPOSTING] = useState(false);
    const { addToast } = useToasts();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (values) => {
        if (!isPOSTING) {
            const config = {
                Headers: "Content-Type: application/json",
            };
            usePOST({
                path: `/catalog/${catalogid}/comment`,
                body: values,
                config,
                callback: (res) => {
                    if (res.data.message === "success") return window.location.reload();
                },
                errorCallback: (err) => {
                    if (err) return addToast("Sorry, You Must Login First", { appearance: "error", autoDismiss: true });
                },
                setIsPOSTING,
            });
        }
    };

    return (
        <PublishCommentContainer>
            <Form
                FormList={[
                    {
                        id: "title",
                        label: "Title",
                        name: "title",
                        placeholder: "Ex. Good Class",
                        type: "text",
                        validation: { required: true },
                    },
                    {
                        id: "comment",
                        label: "Comment",
                        name: "comment",
                        placeholder: "Ex. This is My Favorite Class....",
                        type: "text",
                        validation: { require: true },
                    },
                ]}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
            >
                <Button classNames="mt-m" type="submit" disable={isPOSTING}>
                    {isPOSTING ? <CircularLoading /> : "Publish"}
                </Button>
            </Form>
        </PublishCommentContainer>
    );
};

export default PublishComment;

PublishComment.propTypes = {
    catalogid: PropTypes.string,
};

PublishComment.defaultProps = {
    catalogid: "",
};
