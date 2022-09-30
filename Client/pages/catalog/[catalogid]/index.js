import React from "react";
import PropTypes from "prop-types";
import HeadTemplate from "components/Head";
import { getCatalog, getCatalogComment, getCatalogDetail } from "lib/catalog";
import CatalogDetail from "views/catalog/[catalogid]";

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
            comments,
            data: data ? data : undefined,
        },
    };
}

const CatalogDetails = ({ data, comments, catalogid }) => (
    <>
        <HeadTemplate title={`${data?.title}`} />
        <CatalogDetail catalogid={catalogid} comments={comments} data={data} />
    </>
);

export default CatalogDetails;

CatalogDetails.propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    catalogid: PropTypes.string.isRequired,
};
