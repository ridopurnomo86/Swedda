import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Get from "hooks/api/useGET";
import Put from "hooks/api/usePUT";
import schemaValidation from "modules/validation/profile";
import { NotificationIcon, ProfileContainer, RemoveButton } from "./styles";
import Modal from "src/components/Modal";

const CardProfile = dynamic(() => import("./CardProfile"), {
    ssr: false,
});

const Profile = () => {
    const { addToast } = useToasts();
    const [initialValues, setInitialValues] = useState(null);
    const [isPUTTING, setIsPUTTING] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schemaValidation),
        defaultValues: initialValues,
    });

    useEffect(() => {
        const fetchData = () => {
            Get({
                path: "/user/info",
                callback: (res) => {
                    setInitialValues(res.info);
                    reset({
                        name: res.info.name,
                        email: res.info.email,
                        gender: res.info.gender,
                        birth_date: dayjs(res.info.birth_date).format("YYYY-MM-DD"),
                    });
                },
            });
        };
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        <>
            <Modal
                title="Are you sure?"
                icon={<NotificationIcon />}
                message="are you sure you wanna delete your profile picture?"
            >
                <RemoveButton>Delete</RemoveButton>
            </Modal>
            <ProfileContainer>
                <CardProfile
                    errors={errors}
                    handleSubmit={handleSubmit}
                    register={register}
                    onSubmit={onSubmit}
                    isPUTTING={isPUTTING}
                    defaultValue={initialValues}
                />
            </ProfileContainer>
        </>
    );
};

export default Profile;
