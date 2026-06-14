// Block: Testimonials — two variants: TestimonialsGrid (4-card bento with one featured) and
// TestimonialSpotlight (single centered statement quote). Source: 21st.dev community.
// Adapt: REAL quotes/people/logos only — fabricated testimonials are a build failure
// (honest-proof rule; use founder note or demo proof pre-traction). Restyle per direction.
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// PLACEHOLDER content throughout — every quote, name, role, avatar, and logo must be real
export function TestimonialsGrid() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Replace with the social-proof headline</h2>
                    <p>Replace with one supporting sentence.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Customer logo" height="24" width="auto" />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Replace with the strongest real quote — long-form, naming a concrete result and a feeling of relief. This is the featured slot.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Reviewer" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>AA</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Name</cite>
                                        <span className="text-muted-foreground block text-sm">Role</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Replace with a punchy real one-liner.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/jonathan.webp" alt="Reviewer" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>BB</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Name</cite>
                                        <span className="text-muted-foreground block text-sm">Role</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Replace with a short real quote.</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Reviewer" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>CC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Name</cite>
                                        <span className="text-muted-foreground block text-sm">Role</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Replace with a short real quote.</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/rodrigo.webp" alt="Reviewer" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>DD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Name</p>
                                        <span className="text-muted-foreground block text-sm">Role</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export function TestimonialSpotlight() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <blockquote>
                        <p className="text-lg font-medium sm:text-xl md:text-3xl">Replace with the single strongest real quote — this variant bets the whole section on one voice.</p>

                        <div className="mt-12 flex items-center justify-center gap-6">
                            <Avatar className="size-12">
                                <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Reviewer" height="400" width="400" loading="lazy" />
                                <AvatarFallback>AA</AvatarFallback>
                            </Avatar>

                            <div className="space-y-1 border-l pl-6">
                                <cite className="font-medium">Name</cite>
                                <span className="text-muted-foreground block text-sm">Role, Company</span>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsGrid
