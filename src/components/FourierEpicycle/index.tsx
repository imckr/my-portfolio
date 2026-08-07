// components/FourierEpicycle.tsx
"use client";

import { useEffect, useRef } from "react";

type Point = { re: number; im: number };
type Term = { freq: number; amp: number; phase: number };

// ---- Discrete Fourier Transform ----------------------------------------
function dft(points: Point[]): Term[] {
    const N = points.length;
    const half = Math.floor(N / 2);
    const terms: Term[] = [];

    for (let k = -half; k < N - half; k++) {
        let re = 0,
            im = 0;
        for (let n = 0; n < N; n++) {
            const angle = (-2 * Math.PI * k * n) / N;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            re += points[n].re * cos - points[n].im * sin;
            im += points[n].re * sin + points[n].im * cos;
        }
        re /= N;
        im /= N;
        terms.push({
            freq: k,
            amp: Math.hypot(re, im),
            phase: Math.atan2(im, re),
        });
    }

    return terms.sort((a, b) => b.amp - a.amp);
}

// ---- Sample an SVG path "d" string into evenly-spaced complex points --
function samplePathD(dAttr: string, numSamples: number): Point[] {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", dAttr);
    svg.appendChild(path);
    svg.style.position = "absolute";
    svg.style.left = "-99999px";
    svg.style.visibility = "hidden";
    document.body.appendChild(svg);

    const totalLength = path.getTotalLength();
    const points: Point[] = [];
    for (let i = 0; i < numSamples; i++) {
        const len = (totalLength * i) / numSamples;
        const p = path.getPointAtLength(len);
        points.push({ re: p.x, im: p.y });
    }
    document.body.removeChild(svg);
    return points;
}

// Accepts a raw `d="..."` string or full `<svg>...</svg>` markup
// (first <path> found is used). Returns normalized + centered points.
function pointsFromSVGInput(
    input: string,
    numSamples: number,
    targetR: number,
): Point[] {
    let dAttr = input.trim();

    if (dAttr.includes("<svg") || dAttr.includes("<path")) {
        const doc = new DOMParser().parseFromString(input, "image/svg+xml");
        const pathEl = doc.querySelector("path");
        if (!pathEl) throw new Error("No <path> element found in SVG input.");
        const d = pathEl.getAttribute("d");
        if (!d) throw new Error("<path> element has no d attribute.");
        dAttr = d;
    }

    const raw = samplePathD(dAttr, numSamples);

    const cxRaw = raw.reduce((s, p) => s + p.re, 0) / raw.length;
    const cyRaw = raw.reduce((s, p) => s + p.im, 0) / raw.length;
    let maxR = 0;
    for (const p of raw) {
        maxR = Math.max(maxR, Math.hypot(p.re - cxRaw, p.im - cyRaw));
    }
    const scale = maxR > 0 ? targetR / maxR : 1;

    return raw.map((p) => ({
        re: (p.re - cxRaw) * scale,
        im: (p.im - cyRaw) * scale,
    }));
}

function lissajousPoints(numSamples: number, targetR: number): Point[] {
    const pts: Point[] = [];
    for (let i = 0; i < numSamples; i++) {
        const tt = (2 * Math.PI * i) / numSamples;
        pts.push({
            re: targetR * Math.sin(3 * tt + Math.PI / 2),
            im: targetR * Math.sin(2 * tt),
        });
    }
    return pts;
}

type FourierEpicycleProps = {
    /** Raw SVG path "d" string, e.g. "M10 80 C 40 10, 65..." */
    svgPath?: string;
    /** Full <svg>...</svg> markup — first <path> found is used */
    svgMarkup?: string;
    size?: number;
    maxCircles?: number;
    speed?: number; // ~0.001 - 0.02
    samples?: number;
    ink?: string;
    guide?: string;
    arm?: string;
    background?: string;
    showTrail?: boolean;
    className?: string;
};

export default function FourierEpicycle({
    svgPath,
    svgMarkup,
    size = 120,
    maxCircles = 40,
    speed = 0.006,
    samples = 220,
    ink = "#2b2a28",
    guide = "rgba(43, 42, 40, 0.16)",
    arm = "rgba(43, 42, 40, 0.32)",
    background = "transparent",
    showTrail = true,
    className = "mx-auto block",
}: FourierEpicycleProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.scale(dpr, dpr);

        const cx = size / 2;
        const cy = size / 2;
        const targetR = size * 0.36;

        let points: Point[];
        try {
            const input = svgMarkup ?? svgPath;
            points = input
                ? pointsFromSVGInput(input, samples, targetR)
                : lissajousPoints(200, targetR);
        } catch (err) {
            console.error(
                "FourierEpicycle: failed to parse SVG input, falling back.",
                err,
            );
            points = lissajousPoints(200, targetR);
        }

        const terms = dft(points);

        let t = 0;
        let trail: { x: number; y: number }[] = [];
        let animationFrameId: number;

        const drawFrame = () => {
            ctx.clearRect(0, 0, size, size);
            if (background !== "transparent") {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, size, size);
            }

            const used = terms.slice(0, maxCircles);
            let x = cx;
            let y = cy;

            for (const term of used) {
                const angle = 2 * Math.PI * term.freq * t + term.phase;
                const nx = x + term.amp * Math.cos(angle);
                const ny = y + term.amp * Math.sin(angle);

                if (term.amp > 0.6) {
                    ctx.beginPath();
                    ctx.arc(x, y, term.amp, 0, Math.PI * 2);
                    ctx.strokeStyle = guide;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(nx, ny);
                    ctx.strokeStyle = arm;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                x = nx;
                y = ny;
            }

            if (showTrail) {
                trail.push({ x, y });
                if (trail.length > 400) trail.shift();

                ctx.beginPath();
                trail.forEach((p, i) =>
                    i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y),
                );
                ctx.strokeStyle = ink;
                ctx.lineWidth = 1.4;
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.stroke();
            }

            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = ink;
            ctx.fill();

            t += speed;
            if (t >= 1) {
                t = 0;
                trail = [];
            }

            animationFrameId = requestAnimationFrame(drawFrame);
        };

        animationFrameId = requestAnimationFrame(drawFrame);

        return () => cancelAnimationFrame(animationFrameId);
    }, [
        svgPath,
        svgMarkup,
        size,
        maxCircles,
        speed,
        samples,
        ink,
        guide,
        arm,
        background,
        showTrail,
    ]);

    return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
