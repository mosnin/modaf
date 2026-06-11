// Block: Pricing cards — glassy card primitives (header/price/badge/feature list) plus a
// 3-plan composition with spotlight backdrop. Source: 21st.dev community.
// Adapt: REAL plans/prices/features only; wire CTAs to the Stripe checkout flow
// (05_settings_billing_admin.md); restyle per docs/project/09_design_direction.md.
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, Building, Briefcase } from 'lucide-react';

// --- Pricing card primitives ---

export function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'bg-card relative w-full max-w-xs rounded-xl dark:bg-transparent',
				'p-1.5 shadow-xl backdrop-blur-xl',
				'dark:border-border/80 border',
				className,
			)}
			{...props}
		/>
	);
}

export function Header({
	className,
	children,
	glassEffect = true,
	...props
}: React.ComponentProps<'div'> & { glassEffect?: boolean }) {
	return (
		<div className={cn('bg-muted/80 dark:bg-muted/50 relative mb-4 rounded-xl border p-4', className)} {...props}>
			{glassEffect && (
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 h-48 rounded-[inherit]"
					style={{
						background:
							'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)',
					}}
				/>
			)}
			{children}
		</div>
	);
}

export function Plan({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('mb-8 flex items-center justify-between', className)} {...props} />;
}

export function Description({ className, ...props }: React.ComponentProps<'p'>) {
	return <p className={cn('text-muted-foreground text-xs', className)} {...props} />;
}

export function PlanName({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				"text-muted-foreground flex items-center gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

export function Badge({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span className={cn('border-foreground/20 text-foreground/80 rounded-full border px-2 py-0.5 text-xs', className)} {...props} />
	);
}

export function Price({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('mb-3 flex items-end gap-1', className)} {...props} />;
}

export function MainPrice({ className, ...props }: React.ComponentProps<'span'>) {
	return <span className={cn('text-3xl font-extrabold tracking-tight', className)} {...props} />;
}

export function Period({ className, ...props }: React.ComponentProps<'span'>) {
	return <span className={cn('text-foreground/80 pb-1 text-sm', className)} {...props} />;
}

export function OriginalPrice({ className, ...props }: React.ComponentProps<'span'>) {
	return <span className={cn('text-muted-foreground mr-1 ml-auto text-lg line-through', className)} {...props} />;
}

export function Body({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('space-y-6 p-3', className)} {...props} />;
}

export function List({ className, ...props }: React.ComponentProps<'ul'>) {
	return <ul className={cn('space-y-3', className)} {...props} />;
}

export function ListItem({ className, ...props }: React.ComponentProps<'li'>) {
	return <li className={cn('text-muted-foreground flex items-start gap-3 text-sm', className)} {...props} />;
}

export function Separator({
	children = 'Upgrade to access',
	className,
	...props
}: React.ComponentProps<'div'> & { children?: string; className?: string }) {
	return (
		<div className={cn('text-muted-foreground flex items-center gap-3 text-sm', className)} {...props}>
			<span className="bg-muted-foreground/40 h-[1px] flex-1" />
			<span className="text-muted-foreground shrink-0">{children}</span>
			<span className="bg-muted-foreground/40 h-[1px] flex-1" />
		</div>
	);
}

// --- 3-plan composition (PLACEHOLDER plans — replace with the project's real pricing) ---

export default function PricingCardsSection() {
	const plans = [
		{
			icon: <Users />,
			description: 'Perfect for individuals',
			name: 'Basic',
			price: 'Free',
			variant: 'outline' as const,
			features: ['Replace feature', 'Replace feature', 'Replace feature', 'Replace feature', 'Replace feature'],
		},
		{
			icon: <Briefcase />,
			description: 'Ideal for small teams',
			name: 'Pro',
			badge: 'Popular',
			price: '$29',
			period: '/month',
			variant: 'default' as const,
			features: ['All Basic features', 'Replace feature', 'Replace feature', 'Replace feature', 'Replace feature'],
		},
		{
			icon: <Building />,
			name: 'Enterprise',
			description: 'For large scale companies',
			price: '$99',
			period: '/month',
			variant: 'outline' as const,
			features: ['All Pro features', 'Replace feature', 'Replace feature', 'Replace feature', 'Replace feature'],
		},
	];

	return (
		<main className={cn('relative min-h-svh w-full overflow-hidden', 'flex items-center justify-center p-4')}>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)',
					backgroundSize: '14px 14px',
					maskImage:
						'radial-gradient( circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70% )',
				}}
			/>

			<div aria-hidden="true" className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
				<div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
				<div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				<div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
			</div>

			<section className="grid gap-4 p-6 md:grid-cols-3">
				{plans.map((plan) => (
					<Card className="md:min-w-[260px]" key={plan.name}>
						<Header>
							<Plan>
								<PlanName>
									{plan.icon}
									<span className="text-muted-foreground">{plan.name}</span>
								</PlanName>
								{plan.badge && <Badge>{plan.badge}</Badge>}
							</Plan>
							<Price>
								<MainPrice>{plan.price}</MainPrice>
								{plan.period && <Period>{plan.period}</Period>}
							</Price>
							{/* Wire to the Stripe Checkout flow */}
							<Button variant={plan.variant} className={cn('w-full font-semibold')}>
								Get Started
							</Button>
						</Header>

						<Body>
							<Description>{plan.description}</Description>
							<List>
								{plan.features.map((item) => (
									<ListItem key={item}>
										<CheckCircle2 className="text-foreground h-4 w-4" aria-hidden="true" />
										<span>{item}</span>
									</ListItem>
								))}
							</List>
						</Body>
					</Card>
				))}
			</section>
		</main>
	);
}
