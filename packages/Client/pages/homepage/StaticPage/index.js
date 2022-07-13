import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import StaticPageContainer from "./styles";

const Hero = dynamic(() => import("./Hero"));
const ExclusiveLesson = dynamic(() => import("./ExclusiveLesson"));
const HeroReviewer = dynamic(() => import("./HeroReviewer"));
const OurFeatures = dynamic(() => import("./OurFeatures"));
const SignupSection = dynamic(() => import("./SignupSection"));

const StaticPage = ({ data }) => (
    <StaticPageContainer>
        <Hero />
        <ExclusiveLesson catalog={data} />
        <OurFeatures />
        <HeroReviewer />
        <SignupSection />
    </StaticPageContainer>
);

export default StaticPage;

StaticPage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

StaticPage.defaultProps = {
    data: undefined,
};
