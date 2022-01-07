import React from "react";
import ArticleContainer from "./styles";
import HeroSection from "./HeroSection";
import ListSection from "./ListSection";
import nookies from "nookies";

const Articles = () => (
    <ArticleContainer>
        <HeroSection />
        <ListSection />
    </ArticleContainer>
);

export async function getServerSideProps(context) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];
    if(!token){
        return {                                                                    
            redirect: {
                destination: "/signin",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                permanent: false
            }
        };
    }
    
    return {
        props: {}
    };
}

export default Articles;
