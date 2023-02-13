import Link from "next/link";
import React from "react";

const ProjectIntro = () => {
    return (
        <section className="intro-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="htit">
                            <h4>Description</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
                        <div className="text">
                            <p>
                                We offer a wide range of carpentry services, including cabinetry, flooring, millwork,
                                furniture, window treatments, and exterior carpentry. All services are performed using
                                eco-friendly materials and methods, with a focus on reducing waste, conserving energy,
                                and preserving the environment. We help homeowners, builders, and developers who are
                                committed to promoting sustainable living and are looking for environmentally friendly
                                solutions for their carpentry needs.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="item mt-30">
                            <h6>Client</h6>
                            <p>
                                <Link href="#">New Caledonian Wharf</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item mt-30">
                            <h6>Date</h6>
                            <p>6th December 2022</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item mt-30">
                            <h6>Categories</h6>
                            <p>Carpentry, Renovation, Windows</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item mt-30">
                            <h6>Tags</h6>
                            <p>Minimal, Interior, Sustainable</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectIntro;
