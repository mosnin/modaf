// Block: Integrations orbit sliders — three counter-scrolling logo rows over a grid backdrop
// with the product mark centered, hover slows the motion. Source: 21st.dev community.
// Extra dep: react-use-measure. Adapted: placeholder Button/Link/cn replaced with the real
// shadcn/Next imports. Adapt content: REAL integration logos only; restyle per direction.
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, animate } from 'motion/react';
import useMeasure from 'react-use-measure';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import {
  GitMerge,
  Container,
  CodeXml,
  Database,
  Bot,
  PenTool,
  Shapes,
} from 'lucide-react';

// PLACEHOLDER logos — swap for the product's real integration marks
const VscodeLogo = () => <CodeXml className="size-full" />;
const GitLogo = () => <GitMerge className="size-full" />;
const DockerLogo = () => <Container className="size-full" />;
const PostgresLogo = () => <Database className="size-full" />;
const BotLogo = () => <Bot className="size-full" />;
const PenLogo = () => <PenTool className="size-full" />;
const MainLogoIcon = () => <Shapes className="size-full" />;

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    if (size === 0) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      translation.set(from);
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const IntegrationCard = ({ children, className, isCenter = false }: { children: React.ReactNode; className?: string; isCenter?: boolean }) => {
    return (
        <div className={cn('bg-background relative z-20 flex size-12 items-center justify-center rounded-full border', className)}>
            <div className={cn('m-auto size-fit text-muted-foreground *:size-5', isCenter && '*:size-8')}>{children}</div>
        </div>
    )
}

export default function IntegrationsSlider() {
    return (
        <section>
            <div className="bg-muted dark:bg-background py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
                        <div
                            role="presentation"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>

                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
                                <IntegrationCard><VscodeLogo /></IntegrationCard>
                                <IntegrationCard><GitLogo /></IntegrationCard>
                                <IntegrationCard><DockerLogo /></IntegrationCard>
                                <IntegrationCard><PostgresLogo /></IntegrationCard>
                                <IntegrationCard><BotLogo /></IntegrationCard>
                                <IntegrationCard><PenLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10} reverse>
                                <IntegrationCard><PostgresLogo /></IntegrationCard>
                                <IntegrationCard><DockerLogo /></IntegrationCard>
                                <IntegrationCard><PenLogo /></IntegrationCard>
                                <IntegrationCard><VscodeLogo /></IntegrationCard>
                                <IntegrationCard><BotLogo /></IntegrationCard>
                                <IntegrationCard><GitLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
                                <IntegrationCard><BotLogo /></IntegrationCard>
                                <IntegrationCard><PenLogo /></IntegrationCard>
                                <IntegrationCard><GitLogo /></IntegrationCard>
                                <IntegrationCard><DockerLogo /></IntegrationCard>
                                <IntegrationCard><VscodeLogo /></IntegrationCard>
                                <IntegrationCard><PostgresLogo /></IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
                            <IntegrationCard
                                className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:bg-black/25 dark:shadow-white/15"
                                isCenter={true}>
                                <MainLogoIcon />
                            </IntegrationCard>
                        </div>
                    </div>

                    <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Integrate with your favorite tools</h2>
                        <p className="text-muted-foreground">Replace with one sentence on why these connections matter.</p>

                        <Button variant="outline" size="sm" asChild>
                            <Link href="#">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
