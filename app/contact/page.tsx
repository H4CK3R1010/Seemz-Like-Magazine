"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xeajypzq", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="background">
      <section className="contactPage">
        <h1>Contact Us</h1>

        <p className="contactEmail">
          You can contact us at{" "}
          <a href="mailto:seemzlike@gmail.com">seemzlike@gmail.com</a>
        </p>

        {status === "success" ? (
          <p className="formMessage success">
            Thanks! Your message has been sent.
          </p>
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="New message from Seemz Like Magazine"
            />

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={7}
              required
            />

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "error" && (
              <p className="formMessage error">
                Sorry, your message could not be sent. Please email us directly.
              </p>
            )}
          </form>
        )}
      </section>
    </main>
  );
}
