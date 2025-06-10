import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileVideo, Upload, Scissors, Share2 } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Button variant="outline" className="justify-start">
          <Upload className="mr-2 h-4 w-4" />
          Upload Media
        </Button>
        <Button variant="outline" className="justify-start">
          <FileVideo className="mr-2 h-4 w-4" />
          Create New Project
        </Button>
        <Button variant="outline" className="justify-start">
          <Scissors className="mr-2 h-4 w-4" />
          Clip Editor
        </Button>
        <Button variant="outline" className="justify-start">
          <Share2 className="mr-2 h-4 w-4" />
          Share Project
        </Button>
      </CardContent>
    </Card>
  )
}
