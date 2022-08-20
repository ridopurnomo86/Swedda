import React from "react";
import PropTypes from "prop-types";
import HeadTemplate from "components/Head";
import { getCatalog } from "../../lib/catalog";
import CatalogViews from "views/catalog";

export async function getStaticProps() {
    const data = await getCatalog();

    if (data === undefined || !data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data: data ? data : undefined,
        },
    };
}

const Catalog = ({ data }) => (
    <>
        <HeadTemplate title="Catalog" />
        <CatalogViews data={data} />
    </>
);

export default Catalog;

Catalog.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
