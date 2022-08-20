import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "components/Form";
import CircularLoading from "components/CircularLoading";
import schemaValidation from "modules/validation/comment";
import Post from "hooks/api/usePOST";
import { PublishCommentContainer, ButtonSubmit } from "./styles";

const PublishComment = ({ catalogid }) => {
    const [isPOSTING, setIsPOSTING] = useState(false);
    const { addToast } = useToasts();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });
    const onSubmit = (values) => {
        if (!isPOSTING) {
            Post({
                path: `/catalog/${catalogid}/comment`,
                body: values,
                undefined,
                callback: (res) => {
                    if (res.data.message === "Success") return window.location.reload();
                },
                errorCallback: (err) => {
                    if (err)
                        return addToast("Sorry, You Must Login First", {
                            appearance: "error",
                            autoDismiss: true,
                        });
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
                <ButtonSubmit classNames="mt-m" type="submit" disable={isPOSTING}>
                    {isPOSTING ? <CircularLoading /> : "Publish"}
                </ButtonSubmit>
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
