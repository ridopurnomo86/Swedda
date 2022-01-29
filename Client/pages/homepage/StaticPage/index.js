import React from "react";
import ExclusiveLesson from "./ExclusiveLesson";
import Hero from "./Hero";
import HeroReviewer from "./HeroReviewer";
import OurFeatures from "./OurFeatures";
import StaticPageContainer from "./styles";

const StaticPage = () => (
    <StaticPageContainer>
        <Hero />
        <ExclusiveLesson />
        <OurFeatures />
        <HeroReviewer />
    </StaticPageContainer>
);

export default StaticPage;
