import React from "react";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import MainLayout from "../../layouts/main";

const BlogDetails = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <MainLayout>
            <PageHeader
                title="SDW Stories"
                fullPath={[
                    { id: 1, name: "home", url: "/" },
                    { id: 2, name: "blogs", url: "/blogs" },
                    { id: 3, name: "post details", url: "/blog-details" },
                ]}
            />
            <PostDetails />
        </MainLayout>
    );
};

export default BlogDetails;
