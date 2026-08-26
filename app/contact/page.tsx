"use client";

import { FormEvent } from "react";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert("Thanks for contacting us!");

    event.currentTarget.reset();
  }

  return (
    <div className="background">

      <div className="contactPage">

        <h1>
          Contact Us
        </h1>

        <p className="contactEmail">
          You can contact us at{" "}
          <a href="mailto:seemzlike@gmail.com">
            seemzlike@gmail.com
          </a>
        </p>

        <form
          className="contactForm"
          onSubmit={handleSubmit}
        >

          <label htmlFor="name">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />


          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
          />


          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows={7}
            required
          />


          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}
