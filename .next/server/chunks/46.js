"use strict";
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 5046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Testimonials1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/data/testimonials1.json
const testimonials1_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/img/team/1.jpg","content":"I was in need of some major repairs to my home, and I am so glad I found this business. Stuart was professional, efficient, and really knew what he was doing.","username":"Alex","usertitle":"Cabinetry / Windows / Flooring / Wallpaper"},{"id":2,"image":"/assets/img/team/1.jpg","content":"Stuart was able to fix all of my issues and even made some suggestions for improvements that I hadn\'t thought of. I would highly recommend them to anyone looking for high-quality work and great customer service.","username":"Billy","usertitle":"Upgrades / Renovation"},{"id":3,"image":"/assets/img/team/2.jpg","content":"I am so impressed with the work that Stuart did on my home. He was able to take my vision and turn it into a reality.","username":"Peter","usertitle":"Remodel / Renovation / Upgrade"},{"id":4,"image":"/assets/img/team/2.jpg","content":"He was professional, timely, and always made sure to keep me informed throughout the process. I couldn\'t be happier with the results and would definitely use SDW Carpentry again in the future.","username":"Jane","usertitle":"Remodel / Renovation / Upgrade"},{"id":5,"image":"/assets/img/team/3.jpg","content":"Stuart is always willing to go the extra mile to make sure I was happy with the work. He was able to complete the project on time and within budget, which was a huge relief.","username":"Francesca","usertitle":"Consultations / Shelving / Furniture / Painting"}]');
;// CONCATENATED MODULE: ./src/components/Testimonials1/index.jsx

/* eslint-disable @next/next/no-img-element */ 




class Testimonials1 extends (external_react_default()).Component {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return !this.props.bigTitle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navs mt-30",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "prev",
                    onClick: ()=>this.slider.slickPrev()
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-long-arrow-alt-left"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "next",
                    onClick: ()=>this.slider.slickNext()
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-long-arrow-alt-right"
                    })
                })
            ]
        });
    };
    render() {
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: `testimonials grid section-padding ${this.props.withBg ? "bg-img parallaxie" : ""}`,
                style: {
                    backgroundImage: this.props.withBg ? `url(/assets/img/001.jpg)` : "none"
                },
                "data-overlay-dark": this.props.withBg ? 9 : null,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "main-header text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Testimonials"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "tex-bg",
                                    children: "SDW Carpentry"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            style: {
                                textAlign: "center",
                                marginBottom: 40
                            },
                            children: [
                                "We've been working with home owners and businesses since 2014.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                "See what our customers have to say."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                        className: "testim",
                                        ref: (c)=>this.slider = c
                                        ,
                                        dots: false,
                                        arrows: true,
                                        autoplay: true,
                                        rows: 1,
                                        slidesToScroll: 1,
                                        slidesToShow: 2,
                                        responsive: [
                                            {
                                                breakpoint: 1024,
                                                settings: {
                                                    slidesToShow: 2
                                                }
                                            },
                                            {
                                                breakpoint: 767,
                                                settings: {
                                                    slidesToShow: 1
                                                }
                                            },
                                            {
                                                breakpoint: 480,
                                                settings: {
                                                    slidesToShow: 1
                                                }
                                            }, 
                                        ],
                                        children: testimonials1_namespaceObject.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item wow fadeInUp",
                                                "data-wow-delay": ".3s",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "quote-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/img/clients/quote.svg"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "cont",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "\"",
                                                                item.content,
                                                                "\""
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "author",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: item.image,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                children: [
                                                                    item.username,
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: item.usertitle
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, item.id)
                                        )
                                    }),
                                    this.renderArrows()
                                ]
                            })
                        })
                    ]
                })
            })
        }));
    }
}
/* harmony default export */ const components_Testimonials1 = (Testimonials1);


/***/ })

};
;