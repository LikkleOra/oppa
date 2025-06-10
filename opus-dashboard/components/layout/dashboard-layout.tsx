"use client"

import type React from "react"

import { AppSidebar } from "@/components/layout/app-sidebar"
import { TopNav } from "@/components/layout/top-nav"
import { SidebarInset } from "@/components/ui/sidebar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <TopNav />
          <main className="flex-1">{children}</main>
        </div>
      </SidebarInset>
    </div>
  )
}
