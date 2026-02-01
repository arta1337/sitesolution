"use client";

import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export function Testimonials() {
  const t = useTranslations("HomePage.testimonials");

  const testimonials = [
    {
      name: t("items.0.name"),
      role: t("items.0.role"),
      content: t("items.0.content"),
      rating: 5,
    },
    {
      name: t("items.1.name"),
      role: t("items.1.role"),
      content: t("items.1.content"),
      rating: 5,
    },
    {
      name: t("items.2.name"),
      role: t("items.2.role"),
      content: t("items.2.content"),
      rating: 5,
    },
    {
      name: t("items.3.name"),
      role: t("items.3.role"),
      content: t("items.3.content"),
      rating: 5,
    },
    {
      name: t("items.4.name"),
      role: t("items.4.role"),
      content: t("items.4.content"),
      rating: 5,
    },
    {
      name: t("items.5.name"),
      role: t("items.5.role"),
      content: t("items.5.content"),
      rating: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("note")}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-secondary" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
