// Block: Grid-pattern feature cards — dashed-divided icon grid with generative grid-pattern
// backgrounds and blur-in reveal. Source: 21st.dev community (grid-feature-cards).
// Deps: motion (already in default stack). Adapt: real features/copy, restyle per the
// design direction; the blur reveal counts as the section's entrance, don't double-wrap it.
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

type FeatureType = {
	title: string
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
	description: string
}

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType
}

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const p = genRandomPattern()

	return (
		<div className={cn('relative overflow-hidden p-6', className)} {...props}>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			<feature.icon className="text-foreground/75 size-6" strokeWidth={1} aria-hidden />
			<h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
			<p className="text-muted-foreground relative z-20 mt-2 text-xs font-light">{feature.description}</p>
		</div>
	)
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId()

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([sx, sy], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
					))}
				</svg>
			)}
		</svg>
	)
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7,
		Math.floor(Math.random() * 6) + 1,
	])
}

// PLACEHOLDER features — replace with this product's real capabilities
const features = [
	{ title: 'Fast', icon: Zap, description: 'Replace with a concrete claim.' },
	{ title: 'Powerful', icon: Cpu, description: 'Replace with a concrete claim.' },
	{ title: 'Security', icon: Fingerprint, description: 'Replace with a concrete claim.' },
	{ title: 'Customization', icon: Pencil, description: 'Replace with a concrete claim.' },
	{ title: 'Control', icon: Settings2, description: 'Replace with a concrete claim.' },
	{ title: 'Built for AI', icon: Sparkles, description: 'Replace with a concrete claim.' },
]

export default function FeatureGridPatternCards() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
						Replace. With. Punch.
					</h2>
					<p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
						Replace with one supporting sentence.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	)
}

type ViewAnimationProps = {
	delay?: number
	className?: React.ComponentProps<typeof motion.div>['className']
	children: React.ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return children
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	)
}
