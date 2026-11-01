import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { LIMITS, validateContact, type ContactErrors } from "@/lib/validateContact";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent-soft focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const result = validateContact(data);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setStatus("sending");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.values, website: data.website ?? "" }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrors(json.errors ?? {});
        setServerMessage(json.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setServerMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-card border border-line bg-surface p-8">
        <h3 className="font-display text-2xl font-light">Message sent</h3>
        <p className="mt-3 text-sm text-ink/70">Thank you. I&apos;ll reply to you by email soon.</p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-card border border-line bg-surface p-6 md:p-8"
    >
      <Field label="Your name" error={errors.name}>
        <input
          name="name"
          autoComplete="name"
          maxLength={LIMITS.nameMax}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          className={fieldClass}
        />
      </Field>
      <Field label="Your email" error={errors.email}>
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={LIMITS.emailMax}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className={fieldClass}
        />
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          name="message"
          rows={5}
          maxLength={LIMITS.messageMax}
          placeholder="Tell me about your project"
          aria-invalid={!!errors.message}
          className={fieldClass}
        />
      </Field>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite" className="min-h-5 text-sm text-red-300">
        {status === "error" && serverMessage}
      </div>

      <Button type="submit" arrow disabled={status === "sending"} className="self-start">
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-muted">{label}</span>
      {children}
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}
