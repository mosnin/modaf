// Block: Feature showcase with live table — headline above a real data-table-in-a-frame,
// then a 2-up feature pair and a pull-quote. Source: 21st.dev community.
// Requires: blocks/tables/customers-table-card.tsx copied alongside into src/components/blocks/.
// Adapt: real copy, real (or seed-realistic) table data, REAL quote only, restyle per direction.
import { Card } from '@/components/ui/card'
import CustomersTableCard from '@/components/blocks/customers-table-card'

export default function FeatureShowcaseTable() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div>
            <h2 className="text-foreground text-4xl font-semibold">Replace with the core capability headline</h2>
            <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
              Replace with two sentences on the mechanism and the outcome — this section shows the product working, so the copy should point at what the table proves.
            </p>
            <div className="bg-foreground/5 rounded-3xl p-6">
              <CustomersTableCard />
            </div>
          </div>

          <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
            <div>
              <h3 className="text-foreground text-xl font-semibold">Feature one</h3>
              <p className="text-muted-foreground my-4 text-lg">
                Replace with the mechanism this feature delivers.
              </p>
              <Card className="aspect-video overflow-hidden px-6">
                {/* PLACEHOLDER visual — replace nested card with a real product visual */}
                <Card className="h-full translate-y-6" />
              </Card>
            </div>
            <div>
              <h3 className="text-foreground text-xl font-semibold">Feature two</h3>
              <p className="text-muted-foreground my-4 text-lg">
                Replace with the mechanism this feature delivers.
              </p>
              <Card className="aspect-video overflow-hidden">
                <Card className="translate-6 h-full" />
              </Card>
            </div>
          </div>

          <blockquote className="before:bg-primary relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
            {/* PLACEHOLDER quote — only a REAL customer quote ships here */}
            <p className="text-foreground text-lg">
              Replace with a real customer quote naming a result or relief.
            </p>
            <footer className="mt-4 flex items-center gap-2">
              <cite>Name</cite>
              <span aria-hidden className="bg-foreground/15 size-1 rounded-full"></span>
              <span className="text-muted-foreground">Role</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
