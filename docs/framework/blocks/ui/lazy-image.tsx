// Block: Lazy image — aspect-ratio image with skeleton, fallback, optional in-view loading,
// and a long opacity reveal. Source: 21st.dev community. Requires shadcn aspect-ratio
// (@radix-ui/react-aspect-ratio via `npx shadcn add aspect-ratio`).
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'motion/react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface LazyImageProps {
	alt: string;
	src: string;
	className?: string;
	AspectRatioClassName?: string;
	fallback?: string;
	ratio: number;
	inView?: boolean;
}

export function LazyImage({
	alt,
	src,
	ratio,
	fallback,
	inView = false,
	className,
	AspectRatioClassName,
}: LazyImageProps) {
	const ref = React.useRef<HTMLDivElement | null>(null);
	const imgRef = React.useRef<HTMLImageElement | null>(null);
	const isInView = useInView(ref, { once: true });

	const [imgSrc, setImgSrc] = React.useState<string | undefined>(inView ? undefined : src);
	const [isLoading, setIsLoading] = React.useState(true);

	const handleError = () => {
		if (fallback) {
			setImgSrc(fallback);
		}
		setIsLoading(false);
	};

	const handleLoad = () => {
		setIsLoading(false);
	};

	React.useEffect(() => {
		if (inView && isInView && !imgSrc) {
			setImgSrc(src);
		}
	}, [inView, isInView, src, imgSrc]);

	React.useEffect(() => {
		if (imgRef.current && imgRef.current.complete) {
			handleLoad();
		}
	}, [imgSrc]);

	return (
		<AspectRatio
			ref={ref}
			ratio={ratio}
			className={cn('relative size-full overflow-hidden rounded-lg border', AspectRatioClassName)}
		>
			<div
				className={cn(
					'bg-accent/30 absolute inset-0 animate-pulse rounded-lg transition-opacity will-change-[opacity]',
					{ 'opacity-0': !isLoading },
				)}
			/>

			{imgSrc && (
				<img
					ref={imgRef}
					alt={alt}
					src={imgSrc}
					className={cn(
						'size-full rounded-lg object-cover opacity-0 transition-opacity duration-2000 will-change-[opacity]',
						{ 'opacity-100': !isLoading },
						className,
					)}
					onLoad={handleLoad}
					onError={handleError}
					loading="lazy"
					decoding="async"
					fetchPriority={inView ? 'high' : 'low'}
				/>
			)}
		</AspectRatio>
	);
}
