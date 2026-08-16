// "use client";

// import { animateFadeUp, animateStagger } from "@/lib/animations";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

// export default function TestGSAP() {

//     const containerRef = useRef<HTMLDivElement>(null);
//     const headingRef = useRef<HTMLHeadingElement>(null);

//     useGSAP(() => {
//         animateFadeUp(headingRef.current, 0.5);

//         animateStagger(".stat-card");
//     }, { scope: containerRef });



//     return (
//         <section ref={containerRef}>
//             <h2
//                 ref={headingRef}
//                 className="text-2xl font-bold"
//             >
//                 System Metrics
//             </h2>
//             <div className="grid grid-cols-3 gap-4 mt-8">
//                 <div className="stat-card p-4 border bg-background">99% Uptime</div>
//                 <div className="stat-card p-4 border bg-background">12ms Latency</div>
//                 <div className="stat-card p-4 border bg-background">0 Dropped Packets</div>
//             </div>
//         </section>
//     );
// };