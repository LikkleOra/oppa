import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectGrid } from "@/components/dashboard/project-grid"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-6">
        <DashboardHeader />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <ProjectGrid />
          </div>
          <div className="space-y-6">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
