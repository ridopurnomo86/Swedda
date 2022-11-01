import React, { useState } from "react";
import PropTypes from "prop-types";
import { useToasts } from "react-toast-notifications";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Put from "hooks/api/usePUT";
import schemaValidation from "modules/validation/profile";
import { ProfileContainer } from "./styles";

const CardProfile = dynamic(() => import("./CardProfile"), {
    ssr: false,
});

const Profile = ({ info }) => {
    const { addToast } = useToasts();
    const [isPUTTING, setIsPUTTING] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaValidation),
        defaultValues: info,
    });

    const onSubmit = (values) => {
        if (!isPUTTING) {
            Put({
                path: "/user/info",
                body: { ...values, birth_date: dayjs(values.birth_date).format() },
                config: undefined,
                setIsPUTTING,
                callback: (res) => {
                    if (res)
                        return addToast(res.message, { appearance: "success", autoDismiss: true });
                },
                errorCallback: (err) => {
                    if (err)
                        return addToast("Something Gone Wrong...", {
                            appearance: "error",
                            autoDismiss: true,
                        });
                },
            });
        }
    };

    return (
        <ProfileContainer>
            <CardProfile
                errors={errors}
                handleSubmit={handleSubmit}
                register={register}
                onSubmit={onSubmit}
                isPUTTING={isPUTTING}
                defaultValue={info}
            />
        </ProfileContainer>
    );
};

export default Profile;

Profile.propTypes = {
    info: PropTypes.any.isRequired,
};
