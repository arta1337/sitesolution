"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
    const router = useRouter()
    const pathname = usePathname()

    const switchLanguage = (newLocale: string) => {
        const locales = ['pt', 'en'];
        const pathSegments = pathname.split('/').filter(Boolean);
        const firstSegment = pathSegments[0];

        // If the first segment is a locale, remove it to get the base path
        if (locales.includes(firstSegment)) {
            pathSegments.shift();
        }

        // Reconstruct path with new locale
        // Note: next-intl middleware handles redirecting /pt/page to /page if it's default
        // so we can safely always prepend the locale
        const newPath = `/${newLocale.toLowerCase()}/${pathSegments.join('/')}`;
        router.push(newPath);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[1200]">
                <DropdownMenuItem onClick={() => switchLanguage("PT")}>
                    Português (PT)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLanguage("EN")}>
                    English (EN)
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
