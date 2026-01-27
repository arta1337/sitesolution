import { clientLogos } from "@/lib/content";

// Placeholder client logos - replace with actual logos when available
const logoPlaceholders = [
  "Cliente A",
  "Cliente B", 
  "Cliente C",
  "Cliente D",
  "Cliente E",
  "Cliente F",
];

export function ClientLogos() {
  // Use actual client sectors if available, otherwise show placeholders
  const displayLogos = clientLogos.length > 0 ? clientLogos : logoPlaceholders;
  
  return (
    <section className="py-10 lg:py-12 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Setores que servimos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {displayLogos.map((name) => (
            <div
              key={name}
              className="flex h-12 items-center justify-center px-6 rounded-lg bg-secondary/50 text-muted-foreground font-medium text-sm tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
