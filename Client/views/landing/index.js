import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import LandingPageContainer from "./styles";

const Hero = dynamic(() => import("./Hero"));
const ExclusiveLesson = dynamic(() => import("./ExclusiveLesson"));
const HeroReviewer = dynamic(() => import("./HeroReviewer"));
const OurFeatures = dynamic(() => import("./OurFeatures"));
const SignupSection = dynamic(() => import("./SignupSection"));

const LandingPage = ({ data }) => (
    <LandingPageContainer>
        <Hero />
        <ExclusiveLesson catalog={data} />
        <OurFeatures />
        <HeroReviewer />
        <SignupSection />
    </LandingPageContainer>
);

export default LandingPage;

LandingPage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

LandingPage.defaultProps = {
    data: undefined,
};
