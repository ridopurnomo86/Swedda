import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import LearningMethod from "./LearningMethod";
import Requirement from "./Requirement";
import { StudyToolsContainer, SubTitle, Title, Text, Button } from "./styles";
import StaticDescription from "static/academies/tutorial";
import POST from "pages/api/usePOST";
import nookies from "nookies";
import { useToasts } from "react-toast-notifications";

const StudyTools = () => {
    const { push, query } = useRouter();
    const { addToast } = useToasts();
    const [isPOSTING, setIsPOSTING] = useState(false);
    const initPage = StaticDescription[query.catalogid]?.[0]?.content[0].tutorial_id;
    const initialCurrPage = useRef(initPage).current;
    const token = nookies.get()[process.env.COOKIE_USER || "swedda_cust"];

    const handleLearningCourse = () => {
        POST({
            path: "/academies",
            body: undefined,
            config: {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
            setIsPOSTING,
            callback: (res) => {
                if (res.type === "error" || res.statusCode) {
                    addToast(res.message || "Something gone wrong", {
                        appearance: "error",
                        autoDismiss: true,
                    });
                }

                if (res.type === "success") {
                    addToast(res?.message, { appearance: "success", autoDismiss: true });
                    setTimeout(() => {
                        push({
                            pathname: `/catalog/${query.catalogid}/academies/${initialCurrPage}`,
                        });
                    }, 2000);
                }
            },
            errorCallback: (err) => {
                if (err)
                    return addToast(err.response.data.message, {
                        appearance: "error",
                        autoDismiss: true,
                    });
            },
        });
    };

    return (
        <StudyToolsContainer>
            <Title>Study Tools</Title>
            <SubTitle>Minimum device specifications</SubTitle>
            <Text>This class requires the following device specifications:</Text>
            <Requirement />
            <LearningMethod />
            <Button onClick={handleLearningCourse}>
                {isPOSTING ? "Loading" : "Learning Course"}
            </Button>
        </StudyToolsContainer>
    );
};
export default StudyTools;
