import React, { useState } from "react";
import Dynamic from "next/dynamic";
import PropTypes from "prop-types";
import CatalogDetailsContainer from "./styles";
import StaticDescription from "./ContentInfo/data-desc";

const HeaderCatalog = Dynamic(() => import("./HeaderCatalog"));
const ContentInfo = Dynamic(() => import("./ContentInfo"));

const CatalogDetail = ({ data, comments, catalogid }) => {
    const [indexLink, setIndexLink] = useState(0);

    return (
        <CatalogDetailsContainer>
            <HeaderCatalog stateLink={indexLink} setStateLink={setIndexLink} data={data} />
            <ContentInfo
                activeIndexComp={indexLink}
                campaignTextContent={data?.text_content}
                comments={comments}
                catalogid={catalogid}
                campaignDescription={StaticDescription[catalogid]?.type}
            />
        </CatalogDetailsContainer>
    );
};

export default CatalogDetail;

CatalogDetail.propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    catalogid: PropTypes.string.isRequired,
};
