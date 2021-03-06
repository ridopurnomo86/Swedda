import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidation from "@modules/validation/imageProfile";
import Form from "@components/Form";
import {
    HeaderContainer,
    TitleText,
    SubtitleText,
    ProfileImage,
    PrimaryInfoContainer,
    Wrapper,
    HeaderImage,
} from "./styles";
import Action from "./Action";
import Verify from "./Verify";
import Post from "../../../api/usePOST";

const Header = ({ isVerified, username, name, imageSrc }) => {
    const { addToast } = useToasts();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });

    const onSubmit = (values) => {
        const formData = new FormData();
        formData.append("image_profile", values.file[0]);
        Post({
            path: "/user/upload",
            body: formData,
            config: undefined,
            callback: (res) => {
                if (res.message)
                    return addToast(res.message, { appearance: "success", autoDismiss: true });
            },
        });
    };

    return (
        <HeaderContainer>
            <HeaderImage />
            <PrimaryInfoContainer>
                <ProfileImage imagesrc={imageSrc} />
                <Wrapper>
                    <TitleText>{name}</TitleText>
                    <SubtitleText>{username}</SubtitleText>
                    <Verify isVerified={isVerified} />
                    <Form
                        FormList={[
                            {
                                id: "file",
                                label: "file",
                                name: "file",
                                type: "file",
                            },
                        ]}
                        register={register}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        onSubmit={onSubmit}
                    >
                        <Action />
                    </Form>
                </Wrapper>
            </PrimaryInfoContainer>
        </HeaderContainer>
    );
};

export default Header;

Header.propTypes = {
    isVerified: PropTypes.bool,
    username: PropTypes.string,
    name: PropTypes.string,
    imageSrc: PropTypes.string,
};

Header.defaultProps = {
    isVerified: false,
    username: "",
    name: "",
    imageSrc: "",
};
