// Block: Integrations panel with quote — copy + CTA + featured integration quote beside a
// masked 2x3 mini-grid panel. Source: 21st.dev community. Adapted: placeholder Button/Link/cn
// replaced with real shadcn/Next imports. Adapt content: REAL integrations only; restyle per direction.
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  GitMerge,
  Container,
  CodeXml,
  Database,
  Bot,
  PenTool,
} from 'lucide-react';

// PLACEHOLDER logos — swap for the product's real integration marks
const VSCodiumLogo = () => <CodeXml className="size-9" />;
const GitLogo = () => <GitMerge className="size-9" />;
const DockerLogo = () => <Container className="size-9" />;
const PostgresLogo = () => <Database className="size-9" />;
const OllamaLogo = () => <Bot className="size-9" />;
const PenpotLogo = () => <PenTool className="size-9" />;

const Integration = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) => {
    return (
        <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
            <div className="flex size-fit items-center justify-center">{icon}</div>
            <div className="space-y-1">
                <h3 className="text-sm font-medium">{name}</h3>
                <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default function IntegrationsPanelQuote() {
    return (
        <section>
            <div className="bg-muted dark:bg-background py-24 md:py-32">
                <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
                    <div className="order-last mt-12 flex flex-col gap-12 md:order-first md:mt-0">
                        <div className="space-y-6">
                            <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">Integrate with your favorite tools</h2>
                            <p className="text-muted-foreground">Replace with one sentence on why these connections matter for this product.</p>
                            <Button variant="outline" size="sm" asChild>
                                <Link href="#">Get Started</Link>
                            </Button>
                        </div>

                        <div className="mt-auto grid grid-cols-[auto_1fr] items-center gap-4">
                            <div className="bg-background flex aspect-square size-16 items-center justify-center rounded-lg border">
                                <GitLogo />
                            </div>
                            <blockquote className="text-sm">
                                <p className="italic">&quot;Replace with a real line about the featured integration — what it unlocks in this product.&quot;</p>
                                <div className="mt-2 flex gap-2">
                                    <cite className="font-semibold not-italic">Integration name</cite>
                                    <p className="text-muted-foreground">Source</p>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                        <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                            <div className="grid grid-cols-2 gap-2">
                                <Integration icon={<OllamaLogo />} name="Ollama" description="Run large language models locally." />
                                <Integration icon={<DockerLogo />} name="Docker" description="Develop, ship, and run applications." />
                                <Integration icon={<PostgresLogo />} name="PostgreSQL" description="Powerful open source relational database." />
                                <Integration icon={<PenpotLogo />} name="Penpot" description="Open-source design and prototyping." />
                                <Integration icon={<VSCodiumLogo />} name="VSCodium" description="Community-driven VS Code distribution." />
                                <Integration icon={<GitLogo />} name="Git" description="Distributed version control system." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
