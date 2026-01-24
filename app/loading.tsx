export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header skeleton */}
      <div className="h-16 border-b border-border bg-background/95 lg:h-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="h-8 w-32 animate-pulse rounded bg-secondary" />
          <div className="hidden lg:flex gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 w-16 animate-pulse rounded bg-secondary" />
            ))}
          </div>
          <div className="h-10 w-28 animate-pulse rounded-md bg-secondary" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="h-12 w-3/4 animate-pulse rounded bg-secondary mx-auto" />
          <div className="h-6 w-full animate-pulse rounded bg-secondary" />
          <div className="h-6 w-2/3 animate-pulse rounded bg-secondary mx-auto" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-12 w-12 animate-pulse rounded-xl bg-secondary" />
              <div className="mt-4 h-6 w-1/2 animate-pulse rounded bg-secondary" />
              <div className="mt-2 h-4 w-full animate-pulse rounded bg-secondary" />
              <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-secondary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
