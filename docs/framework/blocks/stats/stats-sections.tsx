// Block: Stats sections — two variants: StatsTrio (centered 3-up divided band) and
// StatsSplitQuote (gradient numerals beside a customer quote). Source: 21st.dev community.
// Adapt: ONLY real, defensible numbers ship (honest-proof rule — cut the section pre-traction),
// real quote only, restyle per docs/project/09_design_direction.md.

export function StatsTrio() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Replace: product in numbers</h2>
                    <p>Replace with one sentence that frames why these numbers matter.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+1200</div>
                        <p>Replace label</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">22 Million</div>
                        <p>Replace label</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+500</div>
                        <p>Replace label</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function StatsSplitQuote() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Replace with the ecosystem headline.</h2>
                    <p>
                        Replace supporting copy. <span className="font-medium">Bold the load-bearing phrase</span> — keep the rest plain.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>Replace with a sentence connecting the stats to the user outcome.</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+1200</div>
                                <p>Replace label</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+500</div>
                                <p>Replace label</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            {/* PLACEHOLDER quote — only a REAL customer quote ships here */}
                            <p>Replace with a real customer quote naming a result or relief.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Name, Role</cite>
                                <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Customer logo" height="20" width="auto" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsTrio
