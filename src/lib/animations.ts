import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
};

export const animateFadeUpStagger = (
    target: gsap.DOMTarget,
    staggerStart: number = 0,
    y_axis: number = 0,
    delay: number = 0,
    stagger: number = 0) => {
    gsap.set(target, { y: y_axis, opacity: 0 })
    return ScrollTrigger.batch(target, {
        start: `${staggerStart}% bottom`,
        once: true,
        onEnter: (element) => {
            gsap.to(element, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: delay,
                stagger: stagger,
                ease: "power3.out",
                overwrite: true,
            })
        },
    });
};

// export const animateFadeUpStagger = (
//     target: gsap.DOMTarget,
//     triggerElement: gsap.DOMTarget | null = null,
//     staggerStart: number = 0,
//     y_axis: number = 0,
//     delay: number = 0,
//     stagger: number = 0) => {
//     return gsap.from(target, {
//         y: y_axis,
//         opacity: 0,
//         duration: 0.8,
//         delay: delay,
//         stagger: stagger,
//         ease: "power3.out",
//         ...(triggerElement && {
//             scrollTrigger: {
//                 trigger: triggerElement,
//                 start: `${staggerStart}% bottom`,
//                 once: true,
//             },

//         })
//     })
// }