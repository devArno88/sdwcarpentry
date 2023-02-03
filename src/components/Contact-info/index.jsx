import React from "react";

const ContactInfo = () => {
    return (
        <div className="info pt-80 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="item">
                            <span className="icon pe-7s-phone"></span>
                            <div className="cont">
                                <h6 className="custom-font">Phone</h6>
                                <p>+44 7938 897282</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item">
                            <span className="icon pe-7s-mail-open"></span>
                            <div className="cont">
                                <h6 className="custom-font">Email</h6>
                                <p>contact@sdwcarpentry.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item">
                            <span className="icon pe-7s-map"></span>
                            <div className="cont">
                                <h6 className="custom-font">Address</h6>
                                <p>Check if Stuart wants this</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
