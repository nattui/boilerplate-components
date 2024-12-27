import Button from "@/components/button"
import { Input } from "@/components/input"

export default function InputsPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center gap-16 overflow-y-auto py-128">
      <div className="flex w-320 flex-col items-center justify-center gap-8">
        <Input defaultValue="Hello world" fullWidth />
        <Button fullWidth size="large" text="Continue" />
      </div>
    </div>
  )
}