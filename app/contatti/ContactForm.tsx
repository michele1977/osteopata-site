"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to backend / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-6 text-sm font-medium text-teal-700">
        Grazie! Ti risponder&ograve; il prima possibile.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          placeholder="Il tuo nome"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
          Telefono
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          placeholder="Il tuo numero"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
          Messaggio
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          placeholder="Descrivi brevemente il motivo del contatto"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg"
      >
        Invia richiesta
      </button>
    </form>
  );
}
