// Block: Content editor split — eyebrow + headline above divided rows pairing live UI
// illustrations (floating toolbar, mono import list) with copy. Source: 21st.dev community.
// Adapt: replace copy, retheme accents, restyle per docs/project/09_design_direction.md.
'use client'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Calendar1, Ellipsis, Italic, Strikethrough, Underline } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContentEditorSplit() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <span className="text-primary">Replace eyebrow</span>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold">Replace with the capability headline</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-lg">Replace with two sentences explaining the mechanism and the outcome for the user.</p>
                    </div>

                    <div className="border-foreground/5 space-y-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
                        <div className="grid sm:grid-cols-5">
                            <CodeIllustration className="sm:col-span-2" />
                            <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                                <h3 className="text-foreground text-xl font-semibold">Feature one</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Replace with the mechanism this feature delivers, in plain language.</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-5">
                            <div className="flex items-center justify-center pt-12 sm:col-span-2">
                                <ScheduleIllustation className="pt-8" />
                            </div>
                            <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
                                <h3 className="text-foreground text-xl font-semibold">Feature two</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Replace with the mechanism this feature delivers, in plain language.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

type IllustrationProps = {
    className?: string
    variant?: 'elevated' | 'outlined' | 'mixed'
}

export const ScheduleIllustation = ({ className, variant = 'elevated' }: IllustrationProps) => {
    return (
        <div className={cn('relative', className)}>
            <div
                className={cn('bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1', {
                    'shadow-black-950/10 shadow-lg': variant === 'elevated',
                    'border-foreground/10 border': variant === 'outlined',
                    'border-foreground/10 border shadow-md shadow-black/5': variant === 'mixed',
                })}>
                <Button size="sm" className="rounded-sm">
                    <Calendar1 className="size-3" />
                    <span className="text-sm font-medium">Schedule</span>
                </Button>
                <span className="bg-border block h-4 w-px"></span>
                <ToggleGroup type="multiple" size="sm" className="gap-0.5 *:rounded-md">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                        <Strikethrough className="size-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-border block h-4 w-px"></span>
                <Button size="icon" className="size-8" variant="ghost">
                    <Ellipsis className="size-3" />
                </Button>
            </div>
            <span>
                <span className="bg-secondary text-secondary-foreground py-1">Tomorrow 8:30 pm</span> is our priority.
            </span>
        </div>
    )
}

export const CodeIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
            <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
                {['Images', 'Variables', 'Pages', 'Components', 'Styles'].map((item, index) => (
                    <li
                        key={index}
                        className={cn(index == 2 && "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
