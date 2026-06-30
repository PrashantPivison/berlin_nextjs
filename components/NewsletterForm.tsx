"use client";

import { FormEvent, useState } from "react";

type Errors = { firstName?: string; lastName?: string; email?: string };

/**
 * Newsletter subscription form. Replicates the WPForms layout
 * (First Name*, Last Name*, Email*, Subscribe). Client-side validation is
 * wired; the submit handler POSTs to a placeholder /api/subscribe route.
 */
export default function NewsletterForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  function validate(): Errors {
    const next: Errors = {};
    if (!values.firstName.trim()) next.firstName = "This field is required.";
    if (!values.lastName.trim()) next.lastName = "This field is required.";
    if (!values.email.trim()) next.email = "This field is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      // TODO: replace with the real subscription endpoint (the original uses WPForms).
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      setValues({ firstName: "", lastName: "", email: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="single-form">
        <label htmlFor="nl-first" className="sr-only" hidden>
          First Name *
        </label>
        <input
          id="nl-first"
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={(e) =>
            setValues((v) => ({ ...v, firstName: e.target.value }))
          }
          aria-invalid={!!errors.firstName}
          required
        />
        {errors.firstName && <div className="field-error">{errors.firstName}</div>}
      </div>

      <div className="single-form">
        <label htmlFor="nl-last" className="sr-only" hidden>
          Last Name *
        </label>
        <input
          id="nl-last"
          type="text"
          placeholder="Last Name"
          value={values.lastName}
          onChange={(e) =>
            setValues((v) => ({ ...v, lastName: e.target.value }))
          }
          aria-invalid={!!errors.lastName}
          required
        />
        {errors.lastName && <div className="field-error">{errors.lastName}</div>}
      </div>

      <div className="single-form">
        <label htmlFor="nl-email" className="sr-only" hidden>
          Email *
        </label>
        <input
          id="nl-email"
          type="email"
          placeholder="Email"
          spellCheck={false}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={!!errors.email}
          required
        />
        {errors.email && <div className="field-error">{errors.email}</div>}
      </div>

      <div className="wpforms-submit-container">
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Subscribe"}
        </button>
      </div>

      {status === "done" && (
        <p className="form-message">Thanks for subscribing!</p>
      )}
      {status === "error" && (
        <p className="form-message" style={{ color: "var(--red)" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
