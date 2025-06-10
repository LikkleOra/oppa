import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your projects.</p>
      </div>
      <Button className="w-full md:w-auto">
        <Plus className="mr-2 h-4 w-4" />
        Create New Project
      </Button>
    </div>
  )
}
