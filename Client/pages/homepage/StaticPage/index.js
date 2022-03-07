import React from "react";
import Dynamic from "next/dynamic";
import StaticPageContainer from "./styles";

const Hero = Dynamic(() => import("./Hero"));
const ExclusiveLesson = Dynamic(() => import("./ExclusiveLesson"));
const HeroReviewer = Dynamic(() => import("./HeroReviewer")) ;
const OurFeatures = Dynamic(() => import("./OurFeatures")) ;
const SignupSection = Dynamic(() => import("./SignupSection"));


const StaticPage = () => (
    <StaticPageContainer>
        <Hero />
        <ExclusiveLesson />
        <OurFeatures />
        <HeroReviewer />
        <SignupSection />
    </StaticPageContainer>
);

export default StaticPage;
