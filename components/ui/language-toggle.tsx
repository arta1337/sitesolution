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
        const pathSegments = pathname.split('/')
        // pathSegments[1] is the locale because path starts with /
        pathSegments[1] = newLocale.toLowerCase()
        const newPath = pathSegments.join('/')
        router.push(newPath)
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
                <DropdownMenuItem onClick={() => switchLanguage("ES")}>
                    Español (ES)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLanguage("FR")}>
                    Français (FR)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
