"use client"

import { useState, type ReactNode } from "react"
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
import {
  INQUIRY_OPTIONS,
  contactSchema,
  type ContactValues,
} from "@/lib/schemas/contact"

type Status = "idle" | "success" | "error"

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/3 px-4 py-3 scheme-dark placeholder:text-white/35"

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

  async function onSubmit() {
    setStatus("idle")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    reset()
    setStatus("success")
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
                  className={cn(
                    fieldClass,
                    "text-base data-[size=default]:h-auto",
                    "data-placeholder:text-white/35"
                  )}
                >
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent align="start">
                  {INQUIRY_OPTIONS.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className={cn(
                        "focus:text-white data-highlighted:text-white",
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

        {/* Announced to screen readers as soon as it changes */}
        <p aria-live="polite" className="text-center text-sm">
          {status === "success" ? (
            <span className="text-gold">
              Thanks we&apos;ll be in touch shortly.
            </span>
          ) : status === "error" ? (
            <span className="text-destructive">
              Something went wrong. Please email us directly.
            </span>
          ) : null}
        </p>
      </div>
    </form>
  )
}
