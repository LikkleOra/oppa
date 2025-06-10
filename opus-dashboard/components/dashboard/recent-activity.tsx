import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileVideo, Upload, MessageSquare, Download } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "upload",
    description: "You uploaded a new video",
    time: "2 hours ago",
    icon: Upload,
  },
  {
    id: 2,
    type: "edit",
    description: 'You edited "Summer Promo"',
    time: "3 hours ago",
    icon: FileVideo,
  },
  {
    id: 3,
    type: "comment",
    description: "John commented on your project",
    time: "5 hours ago",
    icon: MessageSquare,
  },
  {
    id: 4,
    type: "export",
    description: "Project export completed",
    time: "1 day ago",
    icon: Download,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <activity.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
