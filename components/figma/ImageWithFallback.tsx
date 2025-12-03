"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  style,
  className,
  fill,
  width,
  height,
  priority = false,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Usar uma imagem placeholder SVG
      setImgSrc("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Crect fill='%23e5e7eb' width='500' height='500'/%3E%3C/svg%3E");
    }
  };

  if (fill) {
    return (
      <div className={cn("relative", className)} style={style}>
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover"
          onError={handleError}
          priority={priority}
          unoptimized
        />
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
      style={style}
      onError={handleError}
      priority={priority}
    />
  );
}

