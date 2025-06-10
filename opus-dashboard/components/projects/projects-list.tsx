import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Edit, MoreVertical, Play, Trash } from "lucide-react"
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
    duration: "2:45",
  },
  {
    id: 2,
    title: "Product Demo",
    description: "Demonstration of new product features",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "Completed",
    lastEdited: "1 day ago",
    duration: "5:12",
  },
  {
    id: 3,
    title: "Team Introduction",
    description: "Video introducing the team members",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "Draft",
    lastEdited: "3 days ago",
    duration: "1:30",
  },
  {
    id: 4,
    title: "Tutorial Series",
    description: "How-to guides for new users",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "In Progress",
    lastEdited: "5 days ago",
    duration: "8:20",
  },
  {
    id: 5,
    title: "Customer Testimonials",
    description: "Compilation of customer feedback",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "Completed",
    lastEdited: "1 week ago",
    duration: "4:15",
  },
  {
    id: 6,
    title: "Annual Report",
    description: "Year in review presentation",
    thumbnail: "/placeholder.svg?height=120&width=240",
    status: "Draft",
    lastEdited: "2 weeks ago",
    duration: "10:00",
  },
]

export function ProjectsList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="select-all" />
          <label htmlFor="select-all" className="text-sm font-medium">
            Select All
          </label>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Trash className="mr-2 h-4 w-4" />
            Delete Selected
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader className="p-4 pb-0">
              <div className="flex items-start gap-2">
                <Checkbox id={`project-${project.id}`} className="mt-1" />
                <div className="flex-1">
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
            <CardContent className="p-4">
              <div className="relative aspect-video overflow-hidden rounded-md">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs">
                  {project.duration}
                </div>
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
