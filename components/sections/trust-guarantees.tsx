import React from "react"
import { trustGuarantees } from "@/lib/content";
import { Unlock, XCircle, Database, Users, Eye } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  unlock: Unlock,
  "x-circle": XCircle,
  database: Database,
  users: Users,
  eye: Eye,
};

export function TrustGuarantees() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {trustGuarantees.title}
          </h2>
        </div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {trustGuarantees.items.map((item) => {
            const Icon = iconMap[item.icon] || Eye;
            return (
              <div key={item.label} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
