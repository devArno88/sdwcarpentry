import React from "react";

const ContactWithMap = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 map-box">
                    {/* <iframe src={appData.mapIframe}></iframe> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d79471.85316571798!2d-0.12064060663753927!3d51.50412651883481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1675888389358!5m2!1sen!2suk"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="col-lg-6 form">
                    <form id="contact-form" method="post">
                        <div className="messages"></div>

                        <div className="controls">
                            <div className="form-group">
                                <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                            </div>

                            <div className="form-group">
                                <input
                                    id="form_email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required="required"
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    id="form_message"
                                    name="message"
                                    placeholder="Message"
                                    rows="4"
                                    required="required"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-curve btn-color">
                                <span>Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactWithMap;
