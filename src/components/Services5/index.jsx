import React from "react";

const Services5 = () => {
    return (
        <section className="services-col section-padding">
            <div className="container">
                <div className="main-header text-center">
                    <h3>Why Choose Us?</h3>
                    <div className="tex-bg">SDW Carpentry</div>
                </div>

                <p style={{ textAlign: "center", marginBottom: 40 }}>
                    Through a combination of high-quality work, excellent customer service, and a commitment to
                    transparency,
                    <br />
                    our only desire is to achieve 100% customer satisfation (and nothing less).
                </p>
                <div className="row bord-box wow fadeInUp">
                    <div className="col-lg-3 col-md-6 item-bx">
                        <span className="icon flaticon-home"></span>
                        <h6 className="mb-20">Architecture</h6>
                        <p>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>
                        {/* <Link href="/about"><a className="more mt-30">Read More</a></Link> */}
                    </div>

                    <div className="col-lg-3 col-md-6 item-bx">
                        <span className="icon flaticon-kitchen-2"></span>
                        <h6 className="mb-20">Interior Design</h6>
                        <p>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>
                        {/* <Link href="/about"><a className="more mt-30">Read More</a></Link> */}
                    </div>

                    <div className="col-lg-3 col-md-6 item-bx">
                        <span className="icon flaticon-plan"></span>
                        <h6 className="mb-20">3D Modeling</h6>
                        <p>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>
                        {/* <Link href="/about"><a className="more mt-30">Read More</a></Link> */}
                    </div>

                    <div className="col-lg-3 col-md-6 item-bx">
                        <span className="icon flaticon-renovation"></span>
                        <h6 className="mb-20">Repair</h6>
                        <p>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>
                        {/* <Link href="/about"><a className="more mt-30">Read More</a></Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services5;
