import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import HeadTemplate from "@components/Head";
import { CatalogContainer, SubtitleText, TitleContainer, CardDisplay } from "./styles";
import { getCatalog } from "../../lib/catalog";

const CardCatalog = dynamic(() => import("./components/CardCatalog"));

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
        <CatalogContainer>
            <TitleContainer>
                <h1>Learning Path</h1>
                <SubtitleText>
                    Learn in a structured way so that learning targets are easier to achieve at
                    Swedda Academy.
                </SubtitleText>
            </TitleContainer>
            <CardDisplay>
                {data?.map((catalog) => (
                    <CardCatalog
                        direction={`catalog/${catalog?.catalog_id}`}
                        key={catalog?.catalog_id}
                        title={catalog?.title}
                        subtitle={catalog?.text_content}
                        imgUrl={catalog?.poster_img}
                    />
                ))}
            </CardDisplay>
        </CatalogContainer>
    </>
);

export default Catalog;

Catalog.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
