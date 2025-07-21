"use client";

import {useEffect, useRef} from "react";
import Link from "next/link";
import {motion} from "framer-motion";

export const HeroSection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        const mouse = {x: 0, y: 0};

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);
        const mouseMoveHandler = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        window.addEventListener('mousemove', mouseMoveHandler);

        class Particle {
            x: number;
            y: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;
            color: string;

            constructor(x: number, y: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.color = color;
            }

            draw() {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.fillStyle = this.color;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.beginPath();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.closePath();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.fill();
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 200;
                const force = (maxDistance - distance) / maxDistance;

                // Changed from 'let' to 'const'
                const directionX = (forceDirectionX * force * this.density);
                const directionY = (forceDirectionY * force * this.density);

                if (distance < 200) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        const returnDx = this.x - this.baseX;
                        this.x -= returnDx / 10;
                    }
                    if (this.y !== this.baseY) {
                        const returnDy = this.y - this.baseY;
                        this.y -= returnDy / 10;
                    }
                }
                this.draw();
            }
        }

        const init = () => {
            particlesArray = [];
            for (let i = 0; i < 200; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                particlesArray.push(new Particle(x, y, size, `hsl(${Math.random() * 360}, 50%, 50%)`));
            }
        };

        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
        };

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', mouseMoveHandler);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const name = "Naveen Gali";

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {staggerChildren: 0.1, delayChildren: 0.2},
        },
    };

    const letterVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {type: "spring", damping: 12, stiffness: 200},
        },
    };

    return (
        <div className="relative min-h-screen bg-black">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4">
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-slate-100"
                >
                    {name.split("").map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 50, duration: 1.5, delay: 1.5}}
                    className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-2xl"
                >
                    A UI/UX designer and React developer, passionate about creating seamless and engaging digital
                    products.
                </motion.p>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 50, duration: 1.5, delay: 1.7}}
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
                >
                    <Link
                        href="#work"
                        className="group relative inline-flex items-center justify-center px-8 py-3 bg-slate-100 text-black rounded-full text-lg font-semibold transition-transform hover:scale-105"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="/project/aura-fashion-app"
                        className="group relative inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-slate-400 rounded-full text-lg font-semibold transition-colors hover:bg-slate-100 hover:text-black"
                    >
                        Explore a Case Study
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};