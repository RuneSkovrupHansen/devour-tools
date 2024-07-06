import React, { useRef, useEffect } from 'react';
import 'components/image_merger.css';

class Overlay {
    constructor(type, src) {
        this.type = type;
        this.src = src;
    }
};

function calculate_canvas_height(container_width, image_height, image_width) {
    return container_width * image_width / image_height;
}

export function ImageMerger(images) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Maintain high image quality
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        context.scale(dpr, dpr);

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';

        // Set canvas height based of base image
        const base_image = new Image()
        base_image.src = images[0]

        canvas.width = base_image.width;
        canvas.height = base_image.height;

        const loadImages = async () => {
            const loadedImages = await Promise.all(images.map(src => loadImage(src)));
            loadedImages.forEach((img) => {
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
            });
        };

        loadImages();

    }, [images])  // Add images as a dependency to the arrow function

    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous'; // Allow cross-origin images if needed
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);
        });
    };

    return (
        <div className="canvas-container" ref={containerRef}>
            <canvas ref={canvasRef} />
            test
        </div>
    );
}
