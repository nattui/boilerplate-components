"use client"

import type { FormEvent } from "react"
import Button from "@/components/button"
import Input from "@/components/input"
import Label from "@/components/label"

export default function InputsPage() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className="flex w-320 flex-col" onSubmit={onSubmit}>
      <Label className="mb-8" htmlFor="email">
        Email
      </Label>
      <Input
        autoFocus
        className="mb-16"
        id="email"
        name="email"
        required
        type="email"
      />
      <Label className="mb-8" htmlFor="password">
        Password
      </Label>
      <Input
        className="mb-16"
        id="password"
        name="password"
        required
        type="password"
      />
      <Button fullWidth size="large" type="submit">
        Continue
      </Button>
    </form>
  )
}
