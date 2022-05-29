import React, { useState } from "react";
import Dynamic from "next/dynamic";
import PropTypes from "prop-types";
import HeadTemplate from "@components/Head";
import CatalogDetailsContainer from "./styles";
import StaticDescription from "./ContentInfo/data-desc";
import { getCatalog, getCatalogComment, getCatalogDetail } from "../../../lib/catalog";

const HeaderCatalog = Dynamic(() => import("./HeaderCatalog"));
const ContentInfo = Dynamic(() => import("./ContentInfo"));

export async function getStaticPaths() {
    const data = await getCatalog();
    const paths = data.map((info) => ({
        params: {
            catalogid: `${info.catalog_id}`,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { catalogid } = context.params;
    const data = await getCatalogDetail(catalogid);
    const comments = await getCatalogComment(catalogid);

    if (data === undefined || !data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            catalogid,
            comments: comments,
            data: data ? data : undefined,
        },
    };
}

const CatalogDetails = ({ data, comments, catalogid }) => {
    const [indexLink, setIndexLink] = useState(0);

    return (
        <>
            <HeadTemplate title={`${data?.title}`} />
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
        </>
    );
};

export default CatalogDetails;

CatalogDetails.propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    catalogid: PropTypes.string.isRequired,
};
