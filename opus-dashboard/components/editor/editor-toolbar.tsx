import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Save, Undo, Redo, Upload, Download, Scissors, Share2 } from "lucide-react"

export function EditorToolbar() {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <Input defaultValue="Untitled Project" className="w-48 h-8 text-sm" />
          <Button variant="ghost" size="icon" title="Save">
            <Save className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" title="Undo">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Redo">
            <Redo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Upload Media">
            <Upload className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Cut Clip">
            <Scissors className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Export">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <div>
          <Button>Export</Button>
        </div>
      </div>
    </div>
  )
}
