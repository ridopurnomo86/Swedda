import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import HeaderCatalogContainer from "./styles";
import Breadcrumb from "./Breadcrumb";
import Info from "./Info";

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
                priority
            />
            <Info infoCatalog={data} />
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
