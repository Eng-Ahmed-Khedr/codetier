import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
};

export const animateFadeUpStagger = (
    target: gsap.DOMTarget,
    triggerElement: gsap.DOMTarget,
    y_axis: number = 0,
    delay: number = 0,
    stagger: number = 0) => {
    return gsap.from(target, {
        y: y_axis,
        opacity: 0,
        duration: 0.8,
        delay: delay,
        stagger: stagger,
        ease: "power3.out",
        scrollTrigger: {
            trigger: triggerElement,
            start: "40% bottom",
            once: true,
        },
    })
}

// export const animateFadeUp = (target: gsap.DOMTarget, delay: number = 0) => {
//     return gsap.from(target, {
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power3.out",
//         delay: delay,
//     })
// }

// export const animateStagger = (target: gsap.DOMTarget) => {
//     return gsap.from(target, {
//         y: 20,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.15,
//         ease: "back.out(1.5)",
//     }
//     )
// }

// export const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.15,
//             delayChildren: 0.1,
//         }
//     }
// };

// export const itemVariants: Variants = {
//     hidden: {
//         opacity: 0,
//         y: 20
//     },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             type: "spring",
//             stiffness: 100,
//             damping: 20,
//         }
//     }
// }