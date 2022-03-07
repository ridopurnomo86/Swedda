import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { InfoContainer, Title, Subtitle, HeaderCatalogContainer } from "./styles";
import Tag from "../../../../src/components/Tag";
import Breadcrumb from "./Breadcrumb";

const HeaderCatalog = ({ stateLink, setStateLink, data }) => {
    return (
        <HeaderCatalogContainer>
            <Image
                src={"https://source.unsplash.com/RQhV1Kj9uXY"}
                alt="https://source.unsplash.com/RQhV1Kj9uXY"
                layout="responsive"
                quality={100}
                width={100}
                height={20}
                objectFit="cover"
            />
            <InfoContainer>
                <Title>{data.title}</Title>
                {data.tag.map((info, key) => (
                    <Tag text={info} key={key} />
                ))}
                <Subtitle>
                    The complete curriculum was compiled by Swedda together with Harapan University Medan and other
                    industry players. Students are prepared to become Sales Management according to industry needs.
                </Subtitle>
            </InfoContainer>
            <Breadcrumb stateLink={stateLink} setStateLink={setStateLink} />
        </HeaderCatalogContainer>
    );
};

export default HeaderCatalog;

HeaderCatalog.propTypes = {
    stateLink: PropTypes.number,
    setStateLink: PropTypes.func,
    data: PropTypes.objectOf(PropTypes.any),
};

HeaderCatalog.defaultProps = {
    stateLink: undefined,
    setStateLink: () => {},
    data: {},
};
