import React from "react";
import PropTypes from "prop-types";
import { BannerContainer, BannerContent, BannerTitle } from "./styles";
import { MainContainer } from "../../../../styles/index";

const Banner = ({ name }) => (
    <BannerContainer>
        <MainContainer>
            <BannerTitle>{`Welcome, ${name}`}</BannerTitle>
            <BannerContent>Have a nice day.</BannerContent>
        </MainContainer>
    </BannerContainer>
);

export default Banner;

Banner.propTypes = {
    name: PropTypes.string,
};

Banner.defaultProps = {
    name: "",
};
