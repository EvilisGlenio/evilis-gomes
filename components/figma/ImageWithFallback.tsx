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

  if (fill) {
    return (
      <div className={cn("relative h-full w-full", className)} style={style}>
        {!hasError ? (
          <Image
            src={imgSrc}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            onError={() => {
              if (!hasError) {
                setHasError(true);
              }
            }}
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-400">Imagem não encontrada</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {!hasError ? (
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={cn(className)}
          style={style}
          onError={() => {
            if (!hasError) {
              setHasError(true);
            }
          }}
          priority={priority}
        />
      ) : (
        <div
          className={cn("flex items-center justify-center bg-gray-200", className)}
          style={{ width, height, ...style }}
        >
          <span className="text-gray-400">Imagem não encontrada</span>
        </div>
      )}
    </>
  );
}

