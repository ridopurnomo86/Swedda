import React from "react";
import PropTypes from "prop-types";
import Dynamic from "next/dynamic";
import StaticPageContainer from "./styles";

const Hero = Dynamic(() => import("./Hero"));
const ExclusiveLesson = Dynamic(() => import("./ExclusiveLesson"));
const HeroReviewer = Dynamic(() => import("./HeroReviewer"));
const OurFeatures = Dynamic(() => import("./OurFeatures"));
const SignupSection = Dynamic(() => import("./SignupSection"));

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
