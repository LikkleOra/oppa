import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProjectsHeader } from "@/components/projects/projects-header"
import { ProjectsList } from "@/components/projects/projects-list"

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-6">
        <ProjectsHeader />
        <ProjectsList />
      </div>
    </DashboardLayout>
  )
}
