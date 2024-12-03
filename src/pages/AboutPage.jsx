import React from "react";
import { Helmet } from "react-helmet-async";

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title>Seongbong | About Page</title>
                <link rel="canonical" href="https://www.test.com/" />
            </Helmet>
            <div>
                <h1>AboutPage</h1>
            </div>
        </>
    );
}