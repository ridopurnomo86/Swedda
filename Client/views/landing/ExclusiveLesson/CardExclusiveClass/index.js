import React from "react";
import Link from "next/dist/client/link";
import PropTypes from "prop-types";
import Image from "next/image";
import { Wrapper, CardContent, CardTitle, CardText, ViewMoreContainer } from "./styles";

const CardExclusiveClass = ({ imgSrc, title, desc, direction }) => (
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
        <Link href={`${direction}`} passHref>
            <ViewMoreContainer>
                <CardText className="bold">View More</CardText>
            </ViewMoreContainer>
        </Link>
    </Wrapper>
);

export default React.memo(CardExclusiveClass, () => true);

CardExclusiveClass.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    direction: PropTypes.string,
};

CardExclusiveClass.defaultProps = {
    imgSrc: "",
    title: "",
    desc: "",
    direction: "",
};
