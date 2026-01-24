import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/30 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
