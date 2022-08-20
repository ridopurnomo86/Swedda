import React from "react";
import ListFeatureSection from "./ListFeatureSection";
import Section from "./Section";
import { OurFeaturesContainer, Wrapper } from "./styles";

const OurFeatures = () => (
    <Wrapper>
        <OurFeaturesContainer>
            <Section />
            <ListFeatureSection />
        </OurFeaturesContainer>
    </Wrapper>
);

export default OurFeatures;
