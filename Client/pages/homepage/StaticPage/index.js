import React from "react";
import Hero from "./Hero";
// import HeroReviewer from "./HeroReviewer";
import OurFeatures from "./OurFeatures";
import StaticPageContainer from "./styles";

const StaticPage = () => (
    <StaticPageContainer>
        <Hero />
        {/* <HeroReviewer /> */}
        <OurFeatures />
    </StaticPageContainer>
);

export default StaticPage;
