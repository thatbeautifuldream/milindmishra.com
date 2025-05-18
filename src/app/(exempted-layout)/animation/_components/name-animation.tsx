"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { bricolageGrotesque } from "@/lib/fonts";

const faces = [
    { text: "MILIND", fontSize: 60 },
    { text: "KUMAR", fontSize: 58 },
    { text: "MISHRA", fontSize: 55 },
];

const n = 19;
const rots = [
    { ry: 270, a: 0.5 },
    { ry: 0, a: 0.85 },
    { ry: 90, a: 0.4 },
    // { ry: 180, a: 0.0 }, // Not used since we have only 3 faces
];

export function NameAnimation() {
    const povRef = useRef<HTMLDivElement>(null);
    const trayRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Set up faces for each cube
        for (let i = 0; i < n; i++) {
            const die = trayRef.current?.children[i] as HTMLElement | undefined;
            if (!die) continue;
            const cube = die.querySelector(".cube");
            if (!cube) continue;
            const faceNodes = cube.querySelectorAll<HTMLElement>(".face");
            faceNodes.forEach((face, j) => {
                if (rots[j]) {
                    gsap.set(face, {
                        z: 200,
                        rotateY: rots[j].ry,
                        transformOrigin: "50% 50% -201px",
                    });
                }
            });
        }

        // Animate each die
        for (let i = 0; i < n; i++) {
            const die = trayRef.current?.children[i] as HTMLElement | undefined;
            if (!die) continue;
            const cube = die.querySelector(".cube");
            if (!cube) continue;
            gsap
                .timeline({ repeat: -1, yoyo: true, defaults: { ease: "power3.inOut", duration: 1 } })
                .fromTo(
                    cube,
                    { rotateY: -90 },
                    { rotateY: 90, ease: "power1.inOut", duration: 2 }
                )
                .fromTo(
                    cube.querySelectorAll(".face"),
                    {
                        color: (j: number) =>
                            `hsl(${i / n * 75 + 130}, 67%, ${100 * [rots[2].a, rots[0].a, rots[1].a][j]}%)`,
                    },
                    {
                        color: (j: number) =>
                            `hsl(${i / n * 75 + 130}, 67%, ${100 * [rots[0].a, rots[1].a, rots[2].a][j]}%)`,
                    },
                    0
                )
                .to(
                    cube.querySelectorAll(".face"),
                    {
                        color: (j: number) =>
                            `hsl(${i / n * 75 + 130}, 67%, ${100 * [rots[1].a, rots[2].a, rots[0].a][j]}%)`,
                    },
                    1
                )
                .progress(i / n);
        }

        // Tray and die animation
        const dieNodes = trayRef.current?.querySelectorAll(".die");
        const tl = gsap.timeline();
        tl.from(
            trayRef.current,
            { yPercent: -3, duration: 2, ease: "power1.inOut", yoyo: true, repeat: -1 },
            0
        )
            .fromTo(
                trayRef.current,
                { rotate: -15 },
                { rotate: 15, duration: 4, ease: "power1.inOut", yoyo: true, repeat: -1 },
                0
            );
        if (dieNodes && dieNodes.length > 0) {
            tl.from(
                dieNodes,
                { duration: 0.01, opacity: 0, stagger: { each: -0.05, ease: "power1.in" } },
                0
            );
        }
        tl.to(
            trayRef.current,
            { scale: 1.2, duration: 2, ease: "power3.inOut", yoyo: true, repeat: -1 },
            0
        );

        // Responsive scaling
        const resize = () => {
            const h = n * 56;
            if (trayRef.current && povRef.current) {
                gsap.set(trayRef.current, { height: h });
                gsap.set(povRef.current, { scale: window.innerHeight / h });
            }
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, { scope: povRef });

    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black overflow-hidden transition-transform duration-700 z-[9999] ${bricolageGrotesque.className}`}
            ref={povRef}
        >
            <div className="tray relative flex flex-col items-center justify-center" ref={trayRef}>
                {Array.from({ length: n }).map((_, i) => (
                    <div
                        className="die relative w-[400px] h-[55px] pb-[9px] [perspective:999px]"
                        key={i}
                    >
                        <div className="cube absolute w-full h-full [transform-style:preserve-3d]">
                            {faces.map((face, j) => (
                                <div
                                    className="face absolute w-full h-full flex items-center justify-center select-none font-extrabold uppercase tracking-tight [backface-visibility:hidden]"
                                    key={j}
                                    style={{ fontSize: face.fontSize }}
                                >
                                    {face.text}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}