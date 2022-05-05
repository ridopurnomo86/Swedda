import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { CatalogContainer, SubtitleText, TitleContainer, CardDisplay } from "./styles";

const CardCatalog = dynamic(() => import("./components/CardCatalog"));

const Catalog = ({ data }) => {
    return (
        <>
            <Head>
                <title>Catalog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CatalogContainer>
                <TitleContainer>
                    <h1>Learning Path</h1>
                    <SubtitleText>
                        Learn in a structured way so that learning targets are easier to achieve at Swedda Academy.
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
};

export default Catalog;

Catalog.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getServerSideProps() {
    const res = await fetch(`${process.env.BACKEND_URL}/catalog/`);

    const { data } = await res.json();

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
