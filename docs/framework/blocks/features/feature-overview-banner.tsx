// Block: Feature overview banner — headline pair above a full-width product visual with a 4-up mini grid.
// Source: 21st.dev community (features-6). Adapt before shipping: replace copy and the placeholder
// images with THIS product's real visuals, restyle per docs/project/09_design_direction.md.
import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export function FeatureOverviewBanner() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Replace with the product's breadth statement</h2>
                    <p className="max-w-sm sm:ml-auto">One supporting sentence about how the capabilities below work together.</p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-[88/36] relative">
                        <div className="bg-gradient-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                        {/* PLACEHOLDER — replace with real product screenshots (layered upper + dark/light back) */}
                        <img src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75" className="absolute inset-0 z-10" alt="product visual" width={2797} height={1137} />
                        <img src="https://tailark.com/_next/image?url=%2Fmail-back.png&w=3840&q=75" className="hidden dark:block" alt="product visual dark" width={2797} height={1137} />
                        <img src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75" className="dark:hidden" alt="product visual light" width={2797} height={1137} />
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Fast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Replace with a concrete one-line claim for this capability.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Replace with a concrete one-line claim for this capability.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Replace with a concrete one-line claim for this capability.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Replace with a concrete one-line claim for this capability.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
