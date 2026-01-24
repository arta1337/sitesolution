import { clientLogos } from "@/lib/content";

export function ClientLogos() {
  return (
    <section className="py-10 lg:py-12 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Empresas que confiam em nós
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="flex h-10 items-center justify-center px-4 text-muted-foreground/60 font-medium text-sm tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
