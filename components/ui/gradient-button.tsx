"use client"

import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  href: string
  variant: "solid" | "outline"
  className?: string
  children: React.ReactNode
  download?: boolean | string
  target?: string
}

export function GradientButton({ href, target, variant, className, children, download }: GradientButtonProps) {
  return (
      <div
          className={cn(
              "rounded-full h-12 flex items-center justify-center",
              variant === "solid"
                  ? "bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] hover:from-[#3a5ecf] hover:to-[#9333ea]"
                  : "p-[2px] bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]",
              className,
          )}
      >
        <Link
            href={href}
            download={download}
            target={target}
            className={cn(
                "w-full h-full rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                variant === "solid" ? "text-white" : "bg-background hover:bg-background/90 text-foreground",
            )}
        >
          {children}
        </Link>
      </div>
  )
}
