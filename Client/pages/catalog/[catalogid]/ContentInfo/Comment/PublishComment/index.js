import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import usePOST from "../../../../../api/usePOST";
import CircularLoading from "../../../../../../src/components/CircularLoading";
import PublishCommentContainer from "./styles";
import Form from "../../../../../../src/components/Form";
import Button from "../../../../../../src/components/Button";

const PublishComment = ({ catalogid }) => {
    const [isPOSTING, setIsPOSTING] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        console.log(values);
        if (!isPOSTING) {
            const config = {
                Headers: "Content-Type: application/json",
            };
            usePOST({
                path: `/catalog/${catalogid}/comment`,
                body: values,
                config,
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
                        type: "textarea",
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
