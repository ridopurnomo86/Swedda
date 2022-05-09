import React, { useState } from "react";
import Head from "next/head";
import Dynamic from "next/dynamic";
import PropTypes from "prop-types";
import CatalogDetailsContainer from "./styles";
import DataAnalyst from "./ContentInfo/data-desc/data-analyst";

const HeaderCatalog = Dynamic(() => import("./HeaderCatalog"));
const ContentInfo = Dynamic(() => import("./ContentInfo"));

const CatalogDetails = ({ data, comments, catalogid }) => {
    const [indexLink, setIndexLink] = useState(0);
    return (
        <>
            <Head>
                <title>{data?.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CatalogDetailsContainer>
                <HeaderCatalog stateLink={indexLink} setStateLink={setIndexLink} data={data} />
                <ContentInfo
                    activeIndexComp={indexLink}
                    campaignTextContent={data?.text_content}
                    comments={comments}
                    catalogid={catalogid}
                    campaignDescription={DataAnalyst}
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

export async function getServerSideProps(context) {
    const { catalogid } = context.query;
    const res = await fetch(`${process.env.BACKEND_URL}/catalog/${catalogid}`);
    const resComments = await fetch(`${process.env.BACKEND_URL}/catalog/${catalogid}/comments`);

    const { data } = await res.json();
    const { data: comments } = await resComments.json();

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
