import React from "react";
import Dynamic from "next/dynamic";

const Hero = Dynamic(() => import("./Hero"));
const ExclusiveLesson = Dynamic(() => import("./ExclusiveLesson"));
const HeroReviewer = Dynamic(() => import("./HeroReviewer")) ;
const OurFeatures = Dynamic(() => import("./OurFeatures")) ;
const StaticPageContainer = Dynamic(() => import("./styles"));


const StaticPage = () => (
    <StaticPageContainer>
        <Hero />
        <ExclusiveLesson />
        <OurFeatures />
        <HeroReviewer />
    </StaticPageContainer>
);

export default StaticPage;
