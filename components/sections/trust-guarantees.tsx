"use client";

import React from "react"
import { Unlock, XCircle, Database, Users, Eye } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap: Record<string, React.ElementType> = {
  unlock: Unlock,
  "x-circle": XCircle,
  database: Database,
  users: Users,
  eye: Eye,
};

export function TrustGuarantees() {
  const t = useTranslations("HomePage.trustGuarantees");

  const items = [
    { label: t("items.0.label"), description: t("items.0.description"), icon: "unlock" },
    { label: t("items.1.label"), description: t("items.1.description"), icon: "x-circle" },
    { label: t("items.2.label"), description: t("items.2.description"), icon: "database" },
    { label: t("items.3.label"), description: t("items.3.description"), icon: "users" },
    { label: t("items.4.label"), description: t("items.4.description"), icon: "eye" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("title")}
          </h2>
        </div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => {
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
