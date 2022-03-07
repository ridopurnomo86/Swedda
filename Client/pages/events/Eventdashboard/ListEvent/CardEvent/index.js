import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Schedule from "./Schedule";
import { CardWrapper, Text, Title, Content, DirectingBy } from "./styles";

const CardEvent = ({ 
    imgSrc, 
    title, 
    content, 
    sourcePerson, 
    time,
    users,
    location
}) => (
    <CardWrapper>
        <Image
            src={imgSrc}
            width={600}
            height={250}
            alt={imgSrc}
            objectFit="cover"
            layout="intrinsic"
            placeholder={imgSrc}
        />
        <Content>
            <Title>{title}</Title>
            <Text>{content}</Text>
            <DirectingBy>{sourcePerson ? `Directing By: ${sourcePerson}` : "-"}</DirectingBy>
            <Schedule time={time} users={users} location={location} />
        </Content>
    </CardWrapper>

);
export default CardEvent;

CardEvent.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    sourcePerson: PropTypes.string,
    time: PropTypes.string,
    users: PropTypes.number,
    location: PropTypes.string,
};

CardEvent.defaultProps = {
    imgSrc: "",
    title: "",
    content: "",
    sourcePerson: "",
    time: "",
    users: undefined,
    location: ""
};