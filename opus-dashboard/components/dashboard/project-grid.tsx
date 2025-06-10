import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, MoreVertical, Play } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const projects = [
  {
    id: 1,
    title: "Summer Promo Video",
    description: "Promotional video for summer campaign",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "In Progress",
    lastEdited: "2 hours ago",
  },
  {
    id: 2,
    title: "Product Demo",
    description: "Demonstration of new product features",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "Completed",
    lastEdited: "1 day ago",
  },
  {
    id: 3,
    title: "Team Introduction",
    description: "Video introducing the team members",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "Draft",
    lastEdited: "3 days ago",
  },
  {
    id: 4,
    title: "Tutorial Series",
    description: "How-to guides for new users",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "In Progress",
    lastEdited: "5 days ago",
  },
]

export function ProjectGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Projects</h2>
        <Button variant="link" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="p-4 pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="relative aspect-video overflow-hidden rounded-md">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute inset-0 m-auto bg-background/50 hover:bg-background/70"
                >
                  <Play className="h-6 w-6" fill="currentColor" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
              <Badge
                variant={
                  project.status === "Completed"
                    ? "default"
                    : project.status === "In Progress"
                      ? "secondary"
                      : "outline"
                }
              >
                {project.status}
              </Badge>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Edited {project.lastEdited}</span>
                <Button size="icon" variant="ghost">
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
