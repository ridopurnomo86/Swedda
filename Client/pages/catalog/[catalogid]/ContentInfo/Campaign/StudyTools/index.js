import React, { useRef } from "react";
import { useRouter } from "next/router";
import LearningMethod from "./LearningMethod";
import Requirement from "./Requirement";
import { StudyToolsContainer, SubTitle, Title, Text, Button } from "./styles";

const StudyTools = () => {
    const { push, query } = useRouter();
    const initialCurrPage = useRef("213").current;
    const handleLearningCourse = () =>
        push({
            pathname: `/catalog/${query.catalogid}/academies/${initialCurrPage}`,
        });

    return (
        <StudyToolsContainer>
            <Title>Study Tools</Title>
            <SubTitle>Minimum device specifications</SubTitle>
            <Text>This class requires the following device specifications:</Text>
            <Requirement />
            <LearningMethod />
            <Button onClick={handleLearningCourse}>Learn Course</Button>
        </StudyToolsContainer>
    );
};
export default StudyTools;
