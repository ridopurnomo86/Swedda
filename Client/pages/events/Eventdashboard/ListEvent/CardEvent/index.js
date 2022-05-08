import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Schedule from "./Schedule";
import { CardWrapper, Text, Title, Content, DirectingBy } from "./styles";

const CardEvent = ({ imgSrc, title, desc, sourcePerson, time, users, location }) => (
    <CardWrapper>
        <Image
            src={imgSrc}
            width={550}
            height={350}
            alt={imgSrc}
            objectFit="cover"
            layout="intrinsic"
            placeholder={imgSrc}
        />
        <Content>
            <Title>{title}</Title>
            <Text>{desc}</Text>
            <DirectingBy>{sourcePerson ? `Directing By: ${sourcePerson}` : "-"}</DirectingBy>
            <Schedule time={time} users={users} location={location} />
        </Content>
    </CardWrapper>
);
export default CardEvent;

CardEvent.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    sourcePerson: PropTypes.string,
    time: PropTypes.string,
    users: PropTypes.number,
    location: PropTypes.string,
};

CardEvent.defaultProps = {
    imgSrc: "",
    title: "",
    desc: "",
    sourcePerson: "",
    time: "",
    users: undefined,
    location: "",
};
