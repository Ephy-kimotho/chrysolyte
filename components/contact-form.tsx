"use client"

import { useState, type ReactNode } from "react"
import { CheckCircle2 } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { contactSchema, type ContactValues } from "@/lib/schemas/contact"
import { DISCIPLINES } from "@/lib"

type Status = "idle" | "success"

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/3 px-4 py-3 scheme-dark placeholder:text-white/35"

// Ties an input to its `Field` error message for assistive tech. 
function errorProps(id: string, error?: string) {
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  }
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(values: ContactValues) {
    // TODO: replace with the real delivery once an inbox integration exists.
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Contact enquiry", values)
    reset()
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="grid justify-items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-6 py-12 text-center"
      >
        <CheckCircle2 aria-hidden className="size-10 text-gold" />
        <h3 className="text-xl font-bold">Enquiry received</h3>
        <p className="text-dim max-w-md text-base">
          Thanks for getting in touch. We&apos;ve got your details and will be
          in touch shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus("idle")}
          className="mt-3 h-auto rounded-full border-white/15 bg-transparent px-8 py-3.5 text-base font-semibold hover:bg-white/10"
        >
          Submit another response
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName?.message}>
          <input
            id="fullName"
            autoComplete="name"
            placeholder="Jane Wanjiru"
            className={fieldClass}
            {...errorProps("fullName", errors.fullName?.message)}
            {...register("fullName")}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={fieldClass}
            {...errorProps("email", errors.email?.message)}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+254 700 000 000"
            className={fieldClass}
            {...errorProps("phone", errors.phone?.message)}
            {...register("phone")}
          />
        </Field>

        <Field
          id="inquiry"
          label="Enquiring about"
          error={errors.inquiry?.message}
        >
          <Controller
            name="inquiry"
            control={control}
            render={({ field }) => (
              <Select
                name={field.name}
                value={field.value ?? ""}
                onValueChange={field.onChange}
                onOpenChange={(open) => {
                  if (!open) {
                    field.onBlur()
                  }
                }}
              >
                <SelectTrigger
                  id="inquiry"
                  ref={field.ref}
                  {...errorProps("inquiry", errors.inquiry?.message)}
                  className={cn(
                    fieldClass,
                    "text-base data-[size=default]:h-auto",
                    "data-placeholder:text-white/35"
                  )}
                >
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent align="start">
                  {DISCIPLINES.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className={cn(
                        "focus:**:text-white! data-highlighted:**:text-white!"
                      )}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>

      <Field id="message" label="Message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about the site, the scope and roughly when you'd like to start."
          className={cn(fieldClass, "resize-y")}
          {...errorProps("message", errors.message?.message)}
          {...register("message")}
        />
      </Field>

      <div className="mt-2 flex flex-col items-center gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-auto w-full max-w-72 rounded-full px-10 py-4 text-base font-semibold shadow-(--shadow-glow) disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  )
}
