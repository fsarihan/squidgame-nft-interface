import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function SideAnimation() {
    const red = "#fe3477";
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        /* All the JS setup */
        gsap.set("#Top_circle #tc_right", {
            strokeDashoffset: -501,
            opacity: 0
        });
        gsap.set("#left_circle2", {
            strokeDashoffset: 467,
            opacity: 0
        });
        gsap.set("#left_circle1", {
            strokeDashoffset: -328,
        });
        gsap.set("#right_line1", {
            attr: {y2: 281.63}
        });
        gsap.set("#right_line2", {
            attr: {y1: 650.29}
        });
        gsap.set("#right_line3", {
            attr: {y1: 578.54}
        });
        gsap.set("#right_line4", {
            attr: {x2: 1061.44}
        });
        gsap.set("#seven", {strokeDashoffset: 245});
        gsap.set("#bottom_circle", {r: 0});
        gsap.set("#top_circle_2", {r: 0});
        gsap.set("#top_line1", {
            attr: {y1: 448.39}
        });
        gsap.set("#top_line2", {
            attr: {x1: 1052.14}
        });
        gsap.set("#left_line1", {
            attr: {y2: 281.63}
        });
        gsap.set("#left_line_2", {
            attr: {x2: 694.86}
        });
        gsap.set("#left_line_3", {
            attr: {y2: 495.4}
        });
        gsap.set("#left_line_4", {
            attr: {x1: 674.73}
        });
        gsap.set("svg", {
            opacity: 1
        });
    })
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.75
            }
        });

        /* Center triangle */
        tl.to("#Center_triangle #ct_l", {
            x: 280,
            duration: 3.4,
            ease: "power2.inOut"
        }, 0);
        tl.to("#Center_triangle #ct_r", {
            x: 140,
            y: 237,
            duration: 3.4,
            ease: "power2.inOut"
        }, 0);
        tl.to("#Center_triangle #ct_top, #ct_mask_top", {
            x: -340,
            duration: 3.5,
            ease: "none"
        }, 3.4);
        tl.to("#ct_b, #ct_mask_bottom", {
            x: -60,
            duration: 0.67,
            ease: "none"
        }, (3.4 + (3.5 - 0.67)));

        /* Top circle */
        tl.to("#Top_circle #tc_top", {
            strokeDashoffset: -753,
            duration: 2.16,
            ease: "power2.inOut"
        }, 1.45);
        tl.set("#Top_circle #tc_top", {opacity: 0}, (1.45 + 2.16));
        tl.set("#Top_circle #tc_right", {opacity: 1}, (1.45 + 2.16));
        tl.to("#Top_circle #tc_right", {
            strokeDashoffset: 27,
            duration: 3,
            ease: "power2.inOut"
        }, (1.45 + 2.16));

        /* ================== */
        /*  BOTTOM RECT       */
        /* ================== */
        /* Bottom Rect Top */
        tl.to("#Bottom_Rect #br_top", {
            attr: {x1: 1368},
            duration: 2,
            ease: "power3.inOut"
        }, 1);
        tl.to("#Bottom_Rect #br_top", {
            attr: {x2: 1368},
            duration: 2,
            ease: "power1.inOut"
        }, 1);
        tl.to("#Bottom_Rect #br_top", {
            attr: {
                y1: 471,
                y2: 559,
            },
            duration: 0.8,
            ease: "power1.inOut"
        }, (1.45 + 2));

        /* Bottom Rect Right */
        tl.to("#Bottom_Rect #br_right", {
            attr: {
                y1: 471,
            },
            duration: 1.8,
            ease: "power3.inOut"
        }, 1.45);
        tl.to("#Bottom_Rect #br_right", {
            attr: {
                y2: 471,
            },
            duration: 1.8,
            ease: "power1.inOut"
        }, 1.45);
        tl.to("#Bottom_Rect #br_right", {
            attr: {
                x1: 1280,
                x2: 1368,
            },
            duration: 1,
            ease: "power1.inOut"
        }, (1.45 + 1.8));

        /* Bottom Rect Bottom */
        tl.to("#Bottom_Rect #br_bottom", {
            attr: {x1: 1280},
            duration: 3,
            ease: "power3.inOut"
        }, 0);
        tl.to("#Bottom_Rect #br_bottom", {
            attr: {x2: 1280},
            duration: 3,
            ease: "power1.inOut"
        }, 0);
        tl.to("#Bottom_Rect #br_bottom", {
            attr: {y1: 471},
            duration: 1,
            ease: "power1.inOut"
        }, 3.5);
        tl.to("#Bottom_Rect #br_bottom", {
            attr: {y2: 559},
            duration: 2,
            ease: "power2.inOut"
        }, 3.5);

        /* Bottom Rect Left */
        tl.to("#Bottom_Rect #br_left", {
            attr: {y1: 559, y2: 559},
            duration: 1,
            ease: "power2.inOut"
        }, 2);
        tl.to("#Bottom_Rect #br_left", {
            attr: {x1: 1280},
            duration: 4,
            ease: "power2.inOut"
        }, 3.2);
        tl.to("#Bottom_Rect #br_left", {
            attr: {x2: 1368},
            duration: 3,
            ease: "power1.inOut"
        }, 3.2);


        /* Random lines */
        tl.to("#right_line1", {
            attr: {y2: 440},
            duration: 1,
            ease: "power2.inOut"
        }, 4.8);
        tl.to("#right_line2", {
            attr: {y1: 462},
            duration: 1,
            ease: "power1.inOut"
        }, 4.4);
        tl.to("#right_line3", {
            attr: {y1: 462},
            duration: 1.5,
            ease: "power1.inOut"
        }, 2.8);
        tl.to("#right_line4", {
            attr: {x2: 1139.51},
            duration: 1,
            ease: "power1.inOut"
        }, 5.6);
        tl.to("#seven", {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: "power1.inOut"
        }, 4.8);
        tl.to("#bottom_circle", {
            r: 32,
            duration: 2,
            ease: "power1.out"
        }, 4);
        tl.to("#top_line1", {
            attr: {y1: 281},
            duration: 2,
            ease: "power1.inOut"
        }, 4.7);
        tl.to("#top_line2", {
            attr: {x1: 974.94},
            duration: 1,
            ease: "power1.inOut"
        }, 5.5);
        tl.to("#top_circle_2", {
            r: 32,
            duration: 2,
            ease: "power1.out"
        }, 4.4);
        tl.to("#left_line1", {
            attr: {y2: 448.39},
            duration: 1.4,
            ease: "power2.inOut"
        }, 5);
        tl.to("#left_line_2", {
            attr: {x2: 821.69},
            duration: 1.4,
            ease: "power2.inOut"
        }, 3.4);
        tl.to("#left_line_3", {
            attr: {y2: 414.25},
            duration: 1,
            ease: "power2.inOut"
        }, 5);
        tl.to("#left_line_4", {
            attr: {x1: 481.35},
            duration: 3.5,
            ease: "power2.inOut"
        }, 0);

        /* LEFT CIRCLE */
        tl.to("#left_circle1", {
            strokeDashoffset: 400,
            duration: 2.8,
            ease: "power2.inOut"
        }, 1);
        tl.set("#left_circle1", {opacity: 0}, (1 + 2.8));
        tl.set("#left_circle2", {opacity: 1}, (1 + 2.8));
        tl.to("#left_circle2", {
            strokeDashoffset: 1343,
            duration: 3.5,
            ease: "power2.inOut"
        }, (1 + 3));


        /* COLORS */
        tl.to("#br_top, #br_bottom, #br_right, #br_left, #left_circle2", {
            stroke: red,
            duration: 3,
            ease: "power2.inOut"
        }, 4.5);
        tl.to("#ct_b, #ct_r, #ct_l", {
            fill: red,
            duration: 3,
            ease: "power2.inOut"
        }, 4.5);

        /* Shadows */
        tl.set("#Center_triangle", {
            attr: {
                filter: "url(#dropshadow_top)"
            }
        }, 3);
        tl.to("#dropshadow_shade feFuncA", {
            attr: {
                slope: 0.5
            },
            duration: 0.4
        }, 4);
        tl.to("#dropshadow_shade feFuncA", {
            attr: {
                slope: 0
            },
            duration: 1
        }, 5.5);
    });

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="400 0 1100 960">
            <defs>
                <filter id="dropshadow_top">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
                    <feOffset dx="4" dy="-4" result="offsetblur"></feOffset>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5"></feFuncA>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
                <filter id="dropshadow_bottom" filterUnits="userSpaceOnUse">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
                    <feOffset dx="4" dy="4" result="offsetblur"></feOffset>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5"></feFuncA>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
                <filter id="dropshadow_shade" filterUnits="userSpaceOnUse" x="400">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
                    <feOffset dx="4" dy="-4" result="offsetblur"></feOffset>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0"></feFuncA>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
                <clipPath id="clip-path">
                    <rect x="976.09" y="453.96" width="147.83" height="159.59" fill="none"/>
                </clipPath>
                <clipPath id="clip-path-2">
                    <polygon id="ct_mask_top"
                             points="1141.08 443.3 959.88 135.78 638.48 135.78 620.66 443.3 620.66 471.3 1157.57 471.3 1141.08 443.3"
                             fill="none"/>
                </clipPath>
                <clipPath id="clip-path-3">
                    <polygon id="ct_mask_bottom" points="959.88 135.78 762.19 471.3 1157.57 471.3 959.88 135.78"
                             fill="none"/>
                </clipPath>
            </defs>
            <g>
                <g id="Top_circle">
                    <path id="tc_top"
                          d="M959.88,68a72.21,72.21,0,1,1-72.21,72.21A72.21,72.21,0,0,1,959.88,68h327.74"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="28"
                          stroke-dasharray="457 800"/>
                    <path id="tc_right"
                          d="M1274,377.71a32.48,32.48,0,1,0-32.47,32.47A32.48,32.48,0,0,0,1274,377.71l-.4-323.42"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="28"
                          stroke-dasharray="240 600"/>
                </g>
                <line id="right_line1" x1="1368.87" y1="281.63" x2="1368.87" y2="448.39" fill="none"
                      stroke="#fff" stroke-miterlimit="10" stroke-width="28"/>
                <line id="right_line3" x1="1139.51" y1="462.74" x2="1139.51" y2="578.54" fill="none"
                      stroke="#fff" stroke-miterlimit="10" stroke-width="28"/>
                <line id="right_line4" x1="1061.44" y1="526.08" x2="1139.51" y2="526.08" fill="none"
                      stroke="#fff" stroke-miterlimit="10" stroke-width="28"/>
                <g clip-path="url(#clip-path)">
                    <polyline id="seven" points="1008 634.32 1084.21 475.75 1017.9 475.75" fill="none"
                              stroke="#fff" stroke-miterlimit="10" stroke-width="28" stroke-dasharray="242 500"
                              filter="url(#dropshadow_bottom)"/>
                </g>
                <line id="top_line1" x1="1052.14" y1="281.63" x2="1052.14" y2="448.39" fill="none" stroke="#fff"
                      stroke-miterlimit="10" stroke-width="28"/>
                <line id="top_line2" x1="974.94" y1="375.4" x2="1052.14" y2="375.4" fill="none" stroke="#fff"
                      stroke-miterlimit="10" stroke-width="28"/>
                <circle id="bottom_circle" cx="847.47" cy="520.64" r="32" fill="none" stroke="#fff"
                        stroke-miterlimit="10" stroke-width="28" stroke-dasharray="242 500"/>
                <circle id="top_circle_2" cx="944.88" cy="375.4" r="32" fill="none" stroke="#fff"
                        stroke-miterlimit="10" stroke-width="28" stroke-dasharray="242 500"/>
                <line id="left_line_2" x1="694.86" y1="375.4" x2="821.69" y2="375.4" fill="none" stroke="#fff"
                      stroke-miterlimit="10" stroke-width="28"/>
                <g id="Center_triangle">
                    <g clip-path="url(#clip-path-2)">
                        <g>
                            <g id="ct_top">
                                <polygon id="ct_r"
                                         points="1109.58 445.03 944.87 161.26 959.88 135.78 1142.12 445.07 1109.58 445.03"
                                         fill="#fff"/>
                                <polygon id="ct_l"
                                         points="978.51 167.4 810.21 444.9 777.79 444.82 959.88 135.78 978.51 167.4 978.51 167.4"
                                         fill="#fff"/>
                            </g>
                            <g clip-path="url(#clip-path-3)">
                                <polygon id="ct_b"
                                         points="1141.08 443.3 1157.57 471.3 762.19 471.3 778.68 443.3 811.18 443.3 1108.58 443.3 1141.08 443.3"
                                         fill="#fff"/>
                            </g>
                        </g>
                    </g>
                </g>
                <line id="left_line_3" x1="594.07" y1="495.4" x2="594.07" y2="414.25" fill="none" stroke="#fff"
                      stroke-miterlimit="10" stroke-width="28"/>
                <g id="left_circles">
                    <path id="left_circle1"
                          d="M628.56,869.94H959.88a68.23,68.23,0,1,0-68.23-68.23,68.23,68.23,0,0,0,68.23,68.23"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="28"
                          stroke-dasharray="430 850"/>
                    <path id="left_circle2" filter="url(#dropshadow_bottom)"
                          d="M642.56,375.4a48.5,48.5,0,1,1-48.49-48.49,48.49,48.49,0,0,1,48.49,48.49V883.94"
                          fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="28"
                          stroke-dasharray="400 850"/>
                </g>
            </g>
            <line id="left_line_4" filter="url(#dropshadow_bottom)" x1="481.35" y1="495.4" x2="674.73"
                  y2="495.4" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="28"/>
            <g id="Bottom_Rect">
                <line id="br_top" x1="780.25" y1="515.2" x2="1139.51" y2="515.2" fill="none" stroke="#fff"
                      stroke-linecap="square" stroke-miterlimit="10" stroke-width="28"/>
                <line id="br_right" x1="1139.51" y1="515.2" x2="1139.51" y2="801.71" fill="none" stroke="#fff"
                      stroke-linecap="square" stroke-miterlimit="10" stroke-width="28"/>
                <line id="br_bottom" filter="url(#dropshadow_shade)" x1="780.25" y1="801.71" x2="1139.51"
                      y2="801.71" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10"
                      stroke-width="28"/>
                <line id="br_left" filter="url(#dropshadow_shade)" x1="780.25" y1="515.2" x2="780.25"
                      y2="801.71" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10"
                      stroke-width="28"/>
            </g>
            <line id="left_line1" filter="url(#dropshadow_bottom)" x1="859.64" y1="281.63" x2="859.64"
                  y2="448.39" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="28"/>
            <line id="right_line2" filter="url(#dropshadow_bottom)" x1="1193.48" y1="462.74" x2="1193.48"
                  y2="650.29" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="28"/>
        </svg>
    );
}