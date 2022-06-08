import { useRouter } from "next/router";
import React from "react";
import LearningMethod from "./LearningMethod";
import Requirement from "./Requirement";
import { StudyToolsContainer, SubTitle, Title, Text, Button } from "./styles";

const StudyTools = () => {
    const { push, asPath } = useRouter();
    const handleLearningCourse = () => push({ pathname: `${asPath}/academies/212` });
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
