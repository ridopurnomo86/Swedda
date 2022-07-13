import React from "react";
import { QuoteText, TitleText, TitleContainer } from "./styles";

const Title = () => (
    <TitleContainer>
        <TitleText>Something New Is Amazing!</TitleText>
        <QuoteText>
            <i>
                &quot;Learning is not attained by chance, it must be sought for with ardor and
                attended to with diligence.&quot;
            </i>
        </QuoteText>
        <QuoteText>
            <i>--Abigail Adams</i>
        </QuoteText>
    </TitleContainer>
);

export default Title;
