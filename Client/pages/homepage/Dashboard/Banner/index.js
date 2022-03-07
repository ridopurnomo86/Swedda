import React from "react";
import { BannerContainer, BannerContent, BannerTitle } from "./styles";
import { MainContainer } from "../../../../styles/index";

const Banner = () => ( 
    <BannerContainer>
        <MainContainer>
            <BannerTitle>
                    Welcome, Guest,
            </BannerTitle>
            <BannerContent>
                    Have a nice day.
            </BannerContent>
        </MainContainer>
    </BannerContainer>
);

 
export default Banner;