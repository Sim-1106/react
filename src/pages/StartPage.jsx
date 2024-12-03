import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function StartPage() {
    return (
        <>
            <Helmet>
                <title>Seongbong | Start Page</title>
                <link rel="canonical" href="https://www.test.com/" />         
            </Helmet>
            <div>
                <h1>StartPage</h1>
            </div>
        </>
    );
}