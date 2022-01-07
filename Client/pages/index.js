import React from "react";
import Head from "next/head";
import nookies from "nookies";
import { MainContainer } from "../styles";
import StaticPage from "./homepage/StaticPage";

// next dynamic = loadable
// if !token redirect to StaticPage else ServerSidePage
const Homepage = () => (
    <>
        <Head>
            <title>Swedda</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <MainContainer>
            <StaticPage />
        </MainContainer>
    </>
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
        props: {
            token
        }
    };
}



export default Homepage;
