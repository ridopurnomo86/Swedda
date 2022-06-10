import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { TutorialContainer } from "./styles";

const LeftMenu = dynamic(() => import("./LeftMenu"));
const RightMenu = dynamic(() => import("./RightMenu"));

const Tutorial = () => {
    const router = useRouter();
    const { tutorialid } = router.query;

    return (
        <TutorialContainer>
            <LeftMenu tutorialid={tutorialid} />
            <RightMenu />
        </TutorialContainer>
    );
};

export default Tutorial;
