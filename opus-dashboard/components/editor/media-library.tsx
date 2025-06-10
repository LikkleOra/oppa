import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Upload, ImageIcon, Music } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mediaItems = [
  {
    id: 1,
    type: "video",
    name: "intro.mp4",
    thumbnail: "/placeholder.svg?height=80&width=120",
    duration: "0:45",
  },
  {
    id: 2,
    type: "video",
    name: "interview.mp4",
    thumbnail: "/placeholder.svg?height=80&width=120",
    duration: "2:30",
  },
  {
    id: 3,
    type: "image",
    name: "logo.png",
    thumbnail: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 4,
    type: "audio",
    name: "background.mp3",
    duration: "3:15",
  },
  {
    id: 5,
    type: "video",
    name: "outro.mp4",
    thumbnail: "/placeholder.svg?height=80&width=120",
    duration: "0:30",
  },
]

export function MediaLibrary() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search media..." className="w-full pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all" className="flex-1">
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
        </TabsList>

        <div className="p-4">
          <Button className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Upload Media
          </Button>
        </div>

        <TabsContent value="all" className="flex-1 overflow-auto">
          <div className="space-y-2 p-4">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer"
                draggable
              >
                {item.type === "video" && (
                  <div className="relative w-20 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-background/80 px-1 text-[10px]">{item.duration}</div>
                  </div>
                )}
                {item.type === "image" && (
                  <div className="w-12 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                    <ImageIcon
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {item.type === "audio" && (
                  <div className="w-12 h-12 bg-muted rounded flex items-center justify-center flex-shrink-0">
                    <Music className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.type === "video" && <>Video • {item.duration}</>}
                    {item.type === "image" && "Image"}
                    {item.type === "audio" && <>Audio • {item.duration}</>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="video" className="flex-1 overflow-auto">
          <div className="space-y-2 p-4">
            {mediaItems
              .filter((item) => item.type === "video")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer"
                  draggable
                >
                  <div className="relative w-20 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-background/80 px-1 text-[10px]">{item.duration}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Video • {item.duration}</p>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="image" className="flex-1 overflow-auto">
          <div className="space-y-2 p-4">
            {mediaItems
              .filter((item) => item.type === "image")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer"
                  draggable
                >
                  <div className="w-12 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                    <ImageIcon
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Image</p>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="audio" className="flex-1 overflow-auto">
          <div className="space-y-2 p-4">
            {mediaItems
              .filter((item) => item.type === "audio")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer"
                  draggable
                >
                  <div className="w-12 h-12 bg-muted rounded flex items-center justify-center flex-shrink-0">
                    <Music className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Audio • {item.duration}</p>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
