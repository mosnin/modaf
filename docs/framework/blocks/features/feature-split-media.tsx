// Block: Feature split with media — headline + icon checklist beside a large product screenshot.
// Source: 21st.dev community (features-5). Adapt before shipping: replace copy, swap the
// placeholder images for THIS product's real screenshots, restyle per docs/project/09_design_direction.md.
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'

export function FeatureSplitMedia() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-xl md:max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Built for Scaling teams</h2>
                            <p className="mt-6">Replace with one concrete sentence about the mechanism this feature group delivers.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5" />
                                Email and web support
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Fast response time
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Monitoring and analytics
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Architectural review
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            {/* PLACEHOLDER — replace both with real product screenshots (dark + light) */}
                            <img src="https://tailark.com/_next/image?url=%2Fpayments.png&w=3840&q=75" className="hidden rounded-[15px] dark:block" alt="product screenshot dark" width={1207} height={929} />
                            <img src="https://tailark.com/_next/image?url=%2Fpayments-light.png&w=3840&q=75" className="rounded-[15px] shadow dark:hidden" alt="product screenshot light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
