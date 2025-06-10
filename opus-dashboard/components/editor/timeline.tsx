"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ZoomIn, ZoomOut } from "lucide-react"

export function Timeline() {
  const [zoom, setZoom] = useState([50])

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-2 border-b">
        <div className="text-sm font-medium">Timeline</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Slider className="w-24" value={zoom} max={100} step={1} onValueChange={setZoom} />
          <Button variant="ghost" size="icon">
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-2">
        <div className="flex flex-col gap-2">
          {/* Time markers */}
          <div className="flex h-6 border-b">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex-1 border-r text-[10px] text-muted-foreground">
                {i}:00
              </div>
            ))}
          </div>

          {/* Video track */}
          <div className="flex h-16 items-center gap-2">
            <div className="w-20 text-xs font-medium">Video</div>
            <div className="flex-1 h-12 bg-muted/50 rounded-sm relative">
              <div
                className="absolute top-0 left-0 h-full w-1/3 bg-primary/20 rounded-sm border border-primary/30"
                style={{ left: "10%", width: "30%" }}
              >
                <div className="h-full flex items-center justify-center text-xs truncate px-2">intro.mp4</div>
              </div>
              <div
                className="absolute top-0 h-full bg-primary/20 rounded-sm border border-primary/30"
                style={{ left: "45%", width: "20%" }}
              >
                <div className="h-full flex items-center justify-center text-xs truncate px-2">interview.mp4</div>
              </div>
            </div>
          </div>

          {/* Audio track */}
          <div className="flex h-16 items-center gap-2">
            <div className="w-20 text-xs font-medium">Audio</div>
            <div className="flex-1 h-12 bg-muted/50 rounded-sm relative">
              <div
                className="absolute top-0 h-full bg-secondary/30 rounded-sm border border-secondary/40"
                style={{ left: "20%", width: "60%" }}
              >
                <div className="h-full flex items-center justify-center text-xs truncate px-2">background.mp3</div>
              </div>
            </div>
          </div>

          {/* Text track */}
          <div className="flex h-16 items-center gap-2">
            <div className="w-20 text-xs font-medium">Text</div>
            <div className="flex-1 h-12 bg-muted/50 rounded-sm relative">
              <div
                className="absolute top-0 h-full bg-accent/30 rounded-sm border border-accent/40"
                style={{ left: "50%", width: "25%" }}
              >
                <div className="h-full flex items-center justify-center text-xs truncate px-2">Title</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
