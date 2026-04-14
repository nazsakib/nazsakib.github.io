import React, { useState, useEffect, useRef, useCallback } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  decoding = "async",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMountedRef = useRef(true);

  const handleLoad = useCallback(() => {
    if (isMountedRef.current) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    setIsLoaded(false);

    // Preload image to detect when it's ready
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (isMountedRef.current) {
        // Small delay so the browser has painted
        requestAnimationFrame(() => {
          if (isMountedRef.current) setIsLoaded(true);
        });
      }
    };
    img.onerror = () => {
      // Still show the image even if preload failed — let the <img> tag try directly
      if (isMountedRef.current) setIsLoaded(true);
    };

    return () => {
      isMountedRef.current = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-secondary ${wrapperClassName}`}>
      {/* Placeholder shown until image loads */}
      <div
        className={`absolute inset-0 bg-muted transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-hidden
      />

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleLoad}
        className={`transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
