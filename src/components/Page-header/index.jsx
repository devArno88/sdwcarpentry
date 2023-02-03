import { useRouter } from "next/router";
import React from "react";

const PageHeader = ({ title, image }) => {
    const router = useRouter();
    return (
        <header
            className="pages-header bg-img valign parallaxie"
            style={{
                backgroundImage: `url(${!image ? "/img/ls/ls-4.jpg" : image})`,
            }}
            data-overlay-dark="5"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cont text-center">
                            <h1
                                style={{
                                    color: "#E2D2BF",
                                    fontWeight: 300,
                                    letterSpacing: 3,
                                    fontFamily: "sans-serif",
                                }}
                            >
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
