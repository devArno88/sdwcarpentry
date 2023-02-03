import Link from "next/link";
import React from "react";
import skillsProgress from "../../common/skillsProgress";
const Skills2 = () => {
    React.useEffect(() => {
        skillsProgress();
    }, []);
    return (
        <div className="skills-sec section-padding pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 valign">
                        <div className="skills-box full-width">
                            <div className="skill-item">
                                <h6>Carpentry</h6>
                                <div className="skill-progress">
                                    <div className="progres custom-font" data-value="90%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <h6>Renovations</h6>
                                <div className="skill-progress">
                                    <div className="progres custom-font" data-value="80%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <h6>Maintenance</h6>
                                <div className="skill-progress">
                                    <div className="progres custom-font" data-value="70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content">
                            <h4 className="playfont line-height-50 mb-20">Why Choose Us?</h4>
                            <p className="mb-10">
                                Through a combination of high-quality work, excellent customer service, and a commitment
                                to transparency, our only desire is to achieve 100% customer satisfation (and nothing
                                less).
                            </p>
                        </div>
                        <Link href="#about">
                            <a className="btn-curve btn-bord btn-lit mt-30">
                                <span>Read More</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills2;
