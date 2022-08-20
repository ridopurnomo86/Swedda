import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { CatalogContainer, SubtitleText, TitleContainer, CardDisplay } from "./styles";

const CardCatalog = dynamic(() => import("./components/CardCatalog"));

const Catalog = ({ data }) => (
    <CatalogContainer>
        <TitleContainer>
            <h1>Learning Path</h1>
            <SubtitleText>
                Learn in a structured way so that learning targets are easier to achieve at Swedda
                Academy.
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
);

export default Catalog;

Catalog.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
