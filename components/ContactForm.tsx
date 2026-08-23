"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const topic = String(data.get("topic") ?? "General enquiry");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`[${topic}] Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:deepeshkumar384@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field form-field--full">
        <label htmlFor="topic">What is this about?</label>
        <select id="topic" name="topic" defaultValue="General enquiry">
          <option>General enquiry</option>
          <option>Game support</option>
          <option>Creative collaboration</option>
          <option>Publishing opportunity</option>
          <option>Press and media</option>
        </select>
      </div>
      <div className="form-field form-field--full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button className="button button--dark" type="submit">
        Send message <span aria-hidden="true">&#8599;</span>
      </button>
    </form>
  );
}
