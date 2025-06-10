"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { EditorToolbar } from "@/components/editor/editor-toolbar"
import { MediaLibrary } from "@/components/editor/media-library"
import { Timeline } from "@/components/editor/timeline"

export function VideoEditor() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState([70])

  return (
    <div className="flex flex-col h-screen">
      <EditorToolbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Main editor area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Video preview */}
          <div className="relative flex-1 bg-black flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="Video preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" size="icon" className="h-12 w-12">
                  <Play className="h-6 w-6" fill="currentColor" />
                </Button>
              </div>
            </div>

            {/* Video controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2 space-y-2">
                <Slider defaultValue={[30]} max={100} step={1} />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                    <span className="text-xs font-medium">00:45 / 02:30</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => setIsMuted(!isMuted)}>
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <Slider className="w-24" value={volume} max={100} step={1} onValueChange={setVolume} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="h-48 border-t">
            <Timeline />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-80 border-l overflow-auto">
          <Tabs defaultValue="media">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="effects">Effects</TabsTrigger>
            </TabsList>
            <TabsContent value="media" className="p-0">
              <MediaLibrary />
            </TabsContent>
            <TabsContent value="effects" className="p-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="h-20 flex flex-col gap-1">
                  <div className="bg-primary/20 rounded-sm w-full h-2"></div>
                  <span className="text-xs">Fade In</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-1">
                  <div className="bg-primary/20 rounded-sm w-full h-2"></div>
                  <span className="text-xs">Fade Out</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-1">
                  <div className="bg-primary/20 rounded-sm w-full h-2"></div>
                  <span className="text-xs">Blur</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-1">
                  <div className="bg-primary/20 rounded-sm w-full h-2"></div>
                  <span className="text-xs">Zoom</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-1">
                  <div className="bg-primary/20 rounded-sm w-full h-2"></div>
                  <span className="text-xs">Rotate</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-1">
                  <div className="bg-primary/20 rounded-sm w-full h-2"></div>
                  <span className="text-xs">Text</span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
