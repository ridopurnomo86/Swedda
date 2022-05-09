import React from "react";
import { LearningMethodContainer, SubTitle, Text, Title } from "./styles";

const LearningMethod = () => (
    <LearningMethodContainer>
        <Title>Learning Method</Title>
        <SubTitle>Online - Self-paced Learning.</SubTitle>
        <Text>- Total study hours: 16 hours.</Text>
        <Text>- Recommended study time: 10 hours per week (completed in 12 days).</Text>
        <Text>- You decide for yourself how much time will be used to study this class material.</Text>
        <SubTitle>Teaching Facilities</SubTitle>
        <Text>- Material will be presented in the form of text and reading Certificate of competence.</Text>
    </LearningMethodContainer>
);

export default LearningMethod;
