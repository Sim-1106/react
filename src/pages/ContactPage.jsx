import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Seongbong | Contact Page</title>
                <link rel="canonical" href="https://www.test.com/" />         
            </Helmet>
            <div>
                <h1>ContactPage</h1>
            </div>
        </>
    );
}