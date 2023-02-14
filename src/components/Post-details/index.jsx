/* eslint-disable @next/next/no-img-element */
import { Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import thumparallaxUp from "../../common/thumparallaxUp";

const PostDetails = () => {
    React.useEffect(() => {
        setTimeout(() => {
            if (window.simpleParallax) thumparallaxUp();
        }, 1000);
    }, []);
    return (
        <>
            <section className="blog-pg single section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="post">
                                <div className="title-head">
                                    <h2>A Sustainable Practice</h2>
                                    <div className="info">
                                        <p>Stuart, Founder & CEO - January 29th, 2022</p>
                                        <Stack direction="row" gap={2} justifyContent="center" mt={2}>
                                            <span
                                                style={{
                                                    border: "1px solid #c5a47e",
                                                    color: "#c5a47e",
                                                    padding: "6px 12px",
                                                    borderRadius: "1.5rem",
                                                }}
                                            >
                                                # sustainability
                                            </span>
                                            <span
                                                style={{
                                                    border: "1px solid #c5a47e",
                                                    color: "#c5a47e",
                                                    padding: "6px 12px",
                                                    borderRadius: "1.5rem",
                                                }}
                                            >
                                                # carpentry
                                            </span>
                                            <span
                                                style={{
                                                    border: "1px solid #c5a47e",
                                                    color: "#c5a47e",
                                                    padding: "6px 12px",
                                                    borderRadius: "1.5rem",
                                                }}
                                            >
                                                # eco-friendly
                                            </span>
                                        </Stack>
                                    </div>
                                </div>
                                <div className="img main-img">
                                    <img
                                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2213&q=80"
                                        alt=""
                                        className="thumparallax"
                                    />
                                </div>
                                <div className="content pt-20">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                            <div className="cont">
                                                <div className="spacial">
                                                    <p>
                                                        As a carpentry business owner, sustainability has always been a
                                                        core value of mine. Not only is it important for the health of
                                                        our planet, but it also makes good business sense. In an effort
                                                        to spread awareness and attract more clients who share my
                                                        values, I want to share some of the ways in which my business
                                                        incorporates sustainable materials and practices.
                                                    </p>
                                                </div>
                                                <p>
                                                    First and foremost, we prioritize using sustainable materials in all
                                                    of our projects. This includes using responsibly sourced woods, as
                                                    well as materials made from recycled or reclaimed materials. In
                                                    addition to being better for the environment, these materials often
                                                    have unique characteristics and a rustic charm that can add
                                                    character and warmth to any space.
                                                </p>

                                                {/* <h6>- We all intend to plan ahead.</h6> */}

                                                <p>
                                                    We also make a point to use low-VOC (volatile organic compounds)
                                                    paints and finishes, which are not only better for the environment,
                                                    but also for the health of our clients and our team. These products
                                                    emit fewer harmful chemicals, making the air in our clients' homes
                                                    cleaner and healthier.
                                                </p>
                                                <p>
                                                    One of the most important ways in which we incorporate
                                                    sustainability into our business is through energy-efficient
                                                    building practices. This includes using insulation made from
                                                    recycled materials, as well as implementing energy-efficient
                                                    lighting and heating systems. Not only is this better for the
                                                    environment, but it also saves our clients money on their utility
                                                    bills in the long run.
                                                </p>
                                                <p>
                                                    Lastly, we make a point to properly dispose of any waste materials
                                                    generated during our projects. This includes recycling and donating
                                                    materials whenever possible, rather than sending them to landfills.
                                                </p>
                                                <p>
                                                    By incorporating sustainable materials and practices into our
                                                    business, we are not only doing our part to protect the environment,
                                                    but we are also setting ourselves apart in the industry. As more and
                                                    more homeowners become aware of the importance of sustainability,
                                                    they will be looking for companies like ours to help them create
                                                    homes that are not only beautiful and functional, but also
                                                    environmentally friendly.
                                                </p>
                                                <p>
                                                    If you are a homeowner looking for a carpentry business that
                                                    prioritizes sustainability, we would love the opportunity to work
                                                    with you. Not only will you be getting a beautiful and functional
                                                    space, but you'll also be doing your part to help protect the
                                                    planet.
                                                </p>
                                                {/* <ul>
                                                    <li>
                                                        <span>•</span> Integer in volutpat libero.
                                                    </li>
                                                    <li>
                                                        <span>02</span> Vivamus maximus ultricies pulvinar.
                                                    </li>
                                                    <li>
                                                        <span>03</span> priorities that will pop up in any particular
                                                        month.
                                                    </li>
                                                    <li>
                                                        <span>04</span> We all intend to plan ahead.
                                                    </li>
                                                    <li>
                                                        <span>05</span> The main component of a healthy env for self
                                                        esteem.
                                                    </li>
                                                </ul> */}

                                                {/* <div className="quotes text-center">
                                                    <p>
                                                        Never ever think of giving up. Winners never quit and quitters
                                                        never win. Take all negative words out of your mental dictionary
                                                        and focus on the solutions with utmost conviction and patience.
                                                        The battle is never lost until you&apos;ve abandon your vision.
                                                    </p>
                                                </div> */}
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-10">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1503408429278-71c29911c837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-10">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1536000800373-5b5e6020910a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>
                                                    We all intend to plan ahead, but too often let the day-to-day
                                                    minutia get in the way of making a calendar for the year. Sure, you
                                                    can&apos;t know every detail to anticipate. Heck, you can&apos;t
                                                    know half the priorities that will pop up in any particular month.
                                                    But you can plan for big picture seasonality, busy-times, and
                                                    events.
                                                </p>
                                                <div className="share-info">
                                                    <div className="social">
                                                        <Link href="#">
                                                            <a>
                                                                <i className="fab fa-facebook-f"></i>
                                                            </a>
                                                        </Link>
                                                        <Link href="#">
                                                            <a>
                                                                <i className="fab fa-twitter"></i>
                                                            </a>
                                                        </Link>
                                                        <Link href="#">
                                                            <a>
                                                                <i className="fab fa-behance"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="tags">
                                                        <Link href="#">Sustainability</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="author">
                                                <div className="author-img">
                                                    <img src="/assets/img/blog/01.jpg" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h6>
                                                        <span>author :</span> Phoebe Buffay
                                                    </h6>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <div className="social">
                                                        <a href="#">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i className="fab fa-behance"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <h5>Comments</h5>
                                    <div className="item">
                                        <div className="comment-img">
                                            <img src="/assets/img/blog/01.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <h6>
                                                Joey Tribbiani<span> 6 Dec 2022</span>
                                            </h6>
                                            <span className="replay">
                                                <Link href="#">
                                                    <a>
                                                        Reply <i className="fas fa-reply"></i>
                                                    </a>
                                                </Link>
                                            </span>
                                            <p>
                                                The main component of a healthy environment for self esteem is not that
                                                it needs be nurturing. The main compont of a healthy environment is the
                                                willingness to forgive ourselves for our past mistakes. #namaste
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item relped">
                                        <div className="comment-img">
                                            <img src="/assets/img/blog/01.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <h6>
                                                Ross Geller<span> 6 Dec 2022</span>
                                            </h6>
                                            <span className="replay">
                                                <Link href="#">
                                                    <a>
                                                        Reply <i className="fas fa-reply"></i>
                                                    </a>
                                                </Link>
                                            </span>
                                            <p>
                                                The main component of a healthy environment for self esteem is not that
                                                it needs be nurturing. The main compont of a healthy environment is the
                                                willingness to forgive ourselves for our past mistakes. #namaste
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="comment-img">
                                            <img src="/assets/img/blog/01.jpg" alt="" />
                                        </div>
                                        <div className="info">
                                            <h6>
                                                Phoebe Buffay<span> 6 Dec 2022</span>
                                            </h6>
                                            <span className="replay">
                                                <Link href="#">
                                                    <a>
                                                        Reply <i className="fas fa-reply"></i>
                                                    </a>
                                                </Link>
                                            </span>
                                            <p>
                                                The main component of a healthy environment for self esteem is not that
                                                it needs be nurturing. The main compont of a healthy environment is the
                                                willingness to forgive ourselves for our past mistakes. #namaste
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-form">
                                    <h5>Add Comment :</h5>
                                    <div className="form">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea placeholder="Your Comment"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <button className="btn-curve btn-blc btn-lg">
                                                            <span>Submit</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PostDetails;
