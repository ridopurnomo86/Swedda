import React from "react";
import {
    CardSectionContainer,
    CardSection,
    CardSectionTitle,
    CardSectionInfo,
    Wrapper,
} from "./styles";

const ListFeatureSection = () => (
    <Wrapper>
        <CardSectionContainer>
            <CardSection>
                <i className="fas fa-project-diagram" style={{ fontSize: "28px" }}></i>
                <CardSectionTitle>Best Tutors</CardSectionTitle>
                <CardSectionInfo>We have Tutors for improve your skill.</CardSectionInfo>
            </CardSection>
        </CardSectionContainer>
        <CardSectionContainer>
            <CardSection>
                <i className="fas fa-globe" style={{ fontSize: "28px" }}></i>
                <CardSectionTitle>Flexible</CardSectionTitle>
                <CardSectionInfo>You can access when and where ever you are.</CardSectionInfo>
            </CardSection>
        </CardSectionContainer>
    </Wrapper>
);

export default ListFeatureSection;
