// Block: Hero with framed screenshot + trust strip — centered headline/CTAs, image-backed
// app-screenshot frame, logo row beneath. Source: 21st.dev community (hero-section-3).
// Adapt: real headline/CTAs, real product screenshot, REAL logos only (drop the strip
// entirely if you have fewer than ~5 — honest-proof rule), restyle per the design direction.
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroScreenshotTrust() {
    return (
        <main>
            <section className="overflow-hidden">
                <div className="py-20 md:py-36">
                    <div className="relative z-10 mx-auto max-w-5xl px-6">
                        <div className="relative text-center">
                            <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl">Replace With This Product&apos;s Value Claim</h1>

                            <p className="text-muted-foreground mx-auto my-6 max-w-2xl text-balance text-xl">Replace with one supporting sentence.</p>

                            <div className="flex flex-col items-center justify-center gap-3 *:w-full sm:flex-row sm:*:w-auto">
                                <Button asChild size="lg">
                                    <Link href="#link">
                                        <span className="text-nowrap">Get Started</span>
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="#link">
                                        <span className="text-nowrap">View Demo</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-black/10 md:mt-20">
                            {/* PLACEHOLDER backdrop — replace with brand imagery or a direction-styled gradient */}
                            <img
                                src="https://images.unsplash.com/photo-1637055972140-64608c1abe53?q=80&w=2942&auto=format&fit=crop"
                                alt=""
                                className="absolute inset-0 size-full object-cover"
                            />

                            <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
                                {/* PLACEHOLDER — replace with THIS product's real screenshot */}
                                <Image
                                    src="https://tailark.com/_next/image?url=%2Fmist%2Ftailark.png&w=3840&q=75"
                                    alt="app screen"
                                    width="2880"
                                    height="1842"
                                    className="object-top-left size-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Trust strip — REAL logos only; delete this whole div pre-traction */}
                        <div className="mt-8">
                            <p className="text-muted-foreground text-center">Trusted by teams at :</p>
                            <div className="mt-4 flex items-center justify-center gap-12">
                                <div className="flex">
                                    <img className="mx-auto h-5 w-fit" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Customer logo" height="20" width="auto" />
                                </div>
                                <div className="flex">
                                    <img className="mx-auto h-4 w-fit" src="https://html.tailus.io/blocks/customers/column.svg" alt="Customer logo" height="16" width="auto" />
                                </div>
                                <div className="flex">
                                    <img className="mx-auto h-4 w-fit" src="https://html.tailus.io/blocks/customers/github.svg" alt="Customer logo" height="16" width="auto" />
                                </div>
                                <div className="flex">
                                    <img className="mx-auto h-5 w-fit" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Customer logo" height="20" width="auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
