// Block: Content split with quote — headline, product image beside prose with an inset
// customer blockquote. Source: 21st.dev community (content-default). Adapt: real screenshot,
// real copy, REAL quote only (honest-proof rule), restyle per docs/project/09_design_direction.md.
import Image from 'next/image'

export default function ContentSplitQuote() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Replace with the ecosystem/overview headline.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            {/* PLACEHOLDER — replace with real product screenshots (dark + light) */}
                            <Image src="https://tailark.com/_next/image?url=%2Fpayments.png&w=3840&q=75" className="hidden rounded-[15px] dark:block" alt="product illustration dark" width={1207} height={929} />
                            <Image src="https://tailark.com/_next/image?url=%2Fpayments.png&w=3840&q=75" className="rounded-[15px] shadow dark:hidden" alt="product illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Replace with the supporting paragraph. <span className="text-accent-foreground font-bold">Bold the load-bearing phrase</span> — keep the rest plain.
                        </p>
                        <p className="text-muted-foreground">Second supporting paragraph with a concrete mechanism or outcome.</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                {/* PLACEHOLDER quote — only a REAL customer quote ships here */}
                                <p>Replace with a real customer quote that names a result or a relief.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">Name, Role</cite>
                                    <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Customer logo" height="20" width="auto" />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
