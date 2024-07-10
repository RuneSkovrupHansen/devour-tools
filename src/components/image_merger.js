import React, { useRef, useEffect } from "react";
import "components/image_merger.css";

export function ImageMerger({ images }) {
    // Destructure images from props

    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    // Set canvas height based on base image
    const base_image = new Image();
    base_image.src = images[0];

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        base_image.onload = () => {
            canvas.width = base_image.width;
            canvas.height = base_image.height;
        };

        const loadImages = async () => {
            const loadedImages = await Promise.all(
                images.map((src) => loadImage(src))
            );
            loadedImages.forEach((img) => {
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
            });
        };

        loadImages();
    }, [images]); // Add images as a dependency to the arrow function

    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous"; // Allow cross-origin images if needed
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);
        });
    };

    return (
        <div className="canvas-container" ref={containerRef}>
            <canvas ref={canvasRef} />
        </div>
    );
}
