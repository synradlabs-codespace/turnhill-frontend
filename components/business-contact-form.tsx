"use client"

import type * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

type ContactPayload = {
  fullName: string
  mobile: string
  company: string
  position: string
  companyEmail: string
  website?: string
  companySize?: string
  timeline?: string
  brief: string
  consent: boolean
}

type BusinessContactFormProps = {
  title?: string
  description?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  companyPlaceholder?: string
  projectPlaceholder?: string
  buttonText?: string
}

export function BusinessContactForm({
  title = "Start Your Turnhill Consultation",
  description,
  namePlaceholder = "Jane Doe",
  emailPlaceholder = "you@company.com",
  companyPlaceholder = "Acme Inc.",
  projectPlaceholder = "Describe your goals, audience, scope, and success criteria...",
  buttonText = "Request Consultation",
}: BusinessContactFormProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const payload: ContactPayload = {
      fullName: String(data.get("fullName") || ""),
      mobile: String(data.get("mobile") || ""),
      company: String(data.get("company") || ""),
      position: String(data.get("position") || ""),
      companyEmail: String(data.get("companyEmail") || ""),
      website: String(data.get("website") || ""),
      companySize: String(data.get("companySize") || ""),
      timeline: String(data.get("timeline") || ""),
      brief: String(data.get("brief") || ""),
      consent: data.get("consent") === "on",
    }

    if (!payload.fullName || !payload.mobile || !payload.company || !payload.position || !payload.companyEmail || !payload.brief) {
      toast({
        title: "Missing required information",
        description: "Please complete all required fields.",
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to submit")

      toast({
        title: "Success!",
        description: "Your inquiry has been received. The Turnhill team will get back to you shortly.",
        duration: 5000,
      })

      form.reset()
      setResetKey(prev => prev + 1)
    } catch (err: unknown) {
      toast({
        title: "Submission failed",
        description: "Please try again or email us directly at relations@turnhill.com",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      </CardHeader>

      <form key={resetKey} onSubmit={onSubmit} className="contents" aria-label="Turnhill business contact form">
        <CardContent className="grid gap-6">
          {/* Personal */}
          <div className="grid gap-2">
            <h3 className="text-sm font-medium text-muted-foreground">Your Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" name="fullName" placeholder={namePlaceholder} required aria-required="true" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mobile">Mobile number</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  placeholder="+1 555 123 4567"
                  required
                  aria-required="true"
                />
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="grid gap-2">
            <h3 className="text-sm font-medium text-muted-foreground">Company Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder={companyPlaceholder} required aria-required="true" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="position">Position / Role</Label>
                <Input id="position" name="position" placeholder="Head of Product" required aria-required="true" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="companyEmail">Company email</Label>
                <Input
                  id="companyEmail"
                  name="companyEmail"
                  type="email"
                  placeholder={emailPlaceholder}
                  required
                  aria-required="true"
                />
              </div>


            </div>

          </div>
          {/* Project */}
          <div className="grid gap-2">
            <h3 className="text-sm font-medium text-muted-foreground">Project Details</h3>

            <div className="grid gap-2">
              <Label htmlFor="brief">Project brief</Label>
              <Textarea
                id="brief"
                name="brief"
                placeholder={projectPlaceholder}
                className="min-h-[120px]"
                required
                aria-required="true"
              />
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
            <Label htmlFor="consent" className="text-sm text-muted-foreground">
              I agree to be contacted regarding my inquiry. Turnhill will never share your information.
            </Label>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">Response time: within 1–2 business days</p>
          <Button type="submit" disabled={loading} className="min-w-28 bg-[#70AD47] text-white hover:bg-black">
            {loading ? "Sending..." : buttonText}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
