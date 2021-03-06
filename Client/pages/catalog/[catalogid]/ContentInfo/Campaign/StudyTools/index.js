import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import LearningMethod from "./LearningMethod";
import Requirement from "./Requirement";
import { StudyToolsContainer, SubTitle, Title, Text, Button } from "./styles";
import StaticDescription from "../../../academies/[tutorialid]/Static/";
import POST from "pages/api/usePOST";
import nookies from "nookies";
import { useToasts } from "react-toast-notifications";

const StudyTools = () => {
    const { push, query } = useRouter();
    const { addToast } = useToasts();
    const [isPOSTING, setIsPOSTING] = useState(false);
    const initPage = StaticDescription[query.catalogid]?.[0]?.content[0].tutorial_id;
    const initialCurrPage = useRef(initPage).current;
    const token = nookies.get()[process.env.COOKIE_USER];

    const handleLearningCourse = () => {
        POST({
            path: "/academies",
            config: {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
            setIsPOSTING,
            callback: (res) => {
                if (res.type === "success") {
                    addToast(res?.message, { appearance: "success", autoDismiss: true });
                    setTimeout(() => {
                        push({
                            pathname: `/catalog/${query.catalogid}/academies/${initialCurrPage}`,
                        });
                    }, 2000);
                }

                if (res.type === "error") {
                    return addToast("Need verify to learning the course", {
                        appearance: "error",
                        autoDismiss: true,
                    });
                }
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
