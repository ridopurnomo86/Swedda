import React from "react";
import LearningMethod from "./LearningMethod";
import Requirement from "./Requirement";
import { StudyToolsContainer, SubTitle, Title, Text, Button } from "./styles";

const StudyTools = () => (
    <StudyToolsContainer>
        <Title>Study Tools</Title>
        <SubTitle>Minimum device specifications</SubTitle>
        <Text>This class requires the following device specifications:</Text>
        <Requirement />
        <LearningMethod />
        <Button>Learn Course</Button>
    </StudyToolsContainer>
);

export default StudyTools;
