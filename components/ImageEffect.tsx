// Import dependencies
import Image from 'next/image';
import { MouseEvent, useState } from 'react';

// Constants for magnifier size and zoom level
const MAGNIFIER_SIZE = 100;
const ZOOM_LEVEL = 2.5;

// ImageEffect component
const ImageEffect = ({ src, className, alt }: { src: string; className?: string; alt: string }) => {
  // State variables
  const [zoomable, setZoomable] = useState(true);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 100, y: 100, mouseX: 0, mouseY: 0 });

  // Event handlers
  const handleMouseEnter = (e: MouseEvent) => {
    const element = e.currentTarget;
    const { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setZoomable(false);
    updatePosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e);
  };

  const updatePosition = (e: MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      mouseX: x - MAGNIFIER_SIZE / 2,
      mouseY: y - MAGNIFIER_SIZE / 2,
    });
  };

  // Render method
  return (
    <div className="flex w-full items-center justify-center">
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        className="relative size-full overflow-hidden"
      >
        <Image
          className={`transition-transform duration-300 ${className} min-w-full`}
          alt={alt}
          width={600}
          height={600}
          src={src}
          quality={100}
        />
        <div
          style={{
            backgroundPosition: `${position.x}px ${position.y}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
            backgroundRepeat: 'no-repeat',
            display: zoomable ? 'block' : 'none',
            top: `${position.mouseY}px`,
            left: `${position.mouseX}px`,
            width: `${MAGNIFIER_SIZE}px`,
            height: `${MAGNIFIER_SIZE}px`,
          }}
          className={`pointer-events-none absolute z-50 rounded-full border-4 border-gray-500`}
        />
      </div>
    </div>
  );
};

export default ImageEffect;
