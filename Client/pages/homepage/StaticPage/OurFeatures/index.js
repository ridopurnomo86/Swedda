import React from "react";
import {
    CardSection,
    CardSectionContainer,
    CardSectionInfo,
    CardSectionTitle,
    ListFeaturesSection,
    OurFeaturesContainer,
    Section,
    SectionSubtitle,
    SectionTitle,
    Wrapper,
} from "./styles";

const OurFeatures = () => (
    <Wrapper>
        <OurFeaturesContainer>
            <Section>
                <SectionTitle>Our Features Special For You</SectionTitle>
                <SectionSubtitle>
                    We Provide various special Features for all of you.
                </SectionSubtitle>
            </Section>
            <ListFeaturesSection>
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
                        <CardSectionInfo>
                            You can access when and where ever you are.
                        </CardSectionInfo>
                    </CardSection>
                </CardSectionContainer>
            </ListFeaturesSection>
        </OurFeaturesContainer>
    </Wrapper>
);

export default OurFeatures;
