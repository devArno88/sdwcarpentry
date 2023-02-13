/* eslint-disable @next/next/no-img-element */
import React from "react";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import ProjectVideo from "../../components/Project-Video";
import MainLayout from "../../layouts/main";

const ProjectDetails = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <MainLayout>
            <PageHeader
                title="Luxury Furniture"
                fullPath={[
                    { id: 1, name: "home", url: "/" },
                    { id: 2, name: "portfolio", url: "/work1" },
                    { id: 3, name: "project details", url: "/project-details" },
                ]}
                image="https://images.unsplash.com/photo-1675201258498-2abd0f5a9aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            />
            <ProjectIntro />
            <section className="projdtal">
                <div className="justified-gallery">
                    <div className="row">
                        <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1631889993877-71e193bf79b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                            />
                        </a>
                        <a href="#" className="col-lg-4 col-xl-3 col-md-6">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1562008088-e8fe0711f7e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                            />
                        </a>
                        <a href="#" className="col-lg-4 col-xl-3 col-md-6">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1511189975737-b5939ef6a944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            />
                        </a>
                        <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1523247631054-06f15d547ad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            />
                        </a>
                    </div>
                </div>
            </section>

            <ProjectVideo />
        </MainLayout>
    );
};

export default ProjectDetails;
