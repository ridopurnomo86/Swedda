import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Wrapper, CardContent, CardTitle, CardText } from "./styles";

const CardExclusiveClass = ({ imgSrc, title, desc }) => ( 
    <Wrapper>
        <Image
            src={imgSrc}
            width={300}
            height={150}
            alt="pic"
            objectFit="cover"
            layout="responsive"
        />
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardText>{desc}</CardText>
        </CardContent>
    </Wrapper>
);
 
export default CardExclusiveClass;

CardExclusiveClass.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string
};

CardExclusiveClass.defaultProps = {
    imgSrc: "",
    title: "",
    desc: ""
};