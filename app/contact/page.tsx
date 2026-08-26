"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xeajypzq");

  return (
    <main className="background">
      <section className="contactPage">
        <h1>Contact Us</h1>

        <p className="contactEmail">
          You can contact us at{" "}
          <a href="mailto:seemzlike@gmail.com">seemzlike@gmail.com</a>
        </p>

        {state.succeeded ? (
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={7}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

            <ValidationError errors={state.errors} />
          </form>
        )}
      </section>
    </main>
  );
}
