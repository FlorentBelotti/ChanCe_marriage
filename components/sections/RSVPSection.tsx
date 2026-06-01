"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import SectionReveal from "@/components/ui/SectionReveal";

const rsvpSchema = z.object({
  name: z.string().min(2, "Merci d'indiquer votre nom"),
  attendance: z.enum(["yes", "no"]),
  dietaryRestrictions: z.string().max(200).optional(),
  message: z.string().max(400).optional(),
});

type RSVPFormValues = z.infer<typeof rsvpSchema>;

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { attendance: "yes" },
  });

  const onSubmit = async (values: RSVPFormValues) => {
    setSubmitError(null);

    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setSubmitError("Une erreur est survenue. Merci de réessayer.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="bg-surface px-6 py-24">
      <SectionReveal className="mx-auto max-w-3xl rounded-3xl border border-divider/60 bg-cream p-8 md:p-10">
        <h2 className="text-center font-serifDisplay text-5xl text-accent">RSVP</h2>
        <p className="mt-3 text-center text-sm text-body/80">Réponse souhaitée avant le 30 mars 2026</p>

        {submitted ? (
          <p className="mt-8 rounded-xl bg-surface p-4 text-center text-accent">
            Merci pour votre réponse 💛
          </p>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input label="Nom" id="name" error={errors.name?.message} {...register("name")} />

            <label className="block space-y-2" htmlFor="attendance">
              <span className="text-sm font-medium text-accent">Présence</span>
              <select
                id="attendance"
                className="w-full rounded-xl border border-divider bg-cream px-4 py-3"
                {...register("attendance")}
              >
                <option value="yes">Oui, avec joie</option>
                <option value="no">Non, malheureusement</option>
              </select>
            </label>

            <label className="block space-y-2" htmlFor="dietaryRestrictions">
              <span className="text-sm font-medium text-accent">Restrictions alimentaires</span>
              <input
                id="dietaryRestrictions"
                className="w-full rounded-xl border border-divider bg-cream px-4 py-3"
                {...register("dietaryRestrictions")}
              />
            </label>

            <label className="block space-y-2" htmlFor="message">
              <span className="text-sm font-medium text-accent">Message</span>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-xl border border-divider bg-cream px-4 py-3"
                {...register("message")}
              />
            </label>

            {submitError ? <p className="text-sm text-red-700">{submitError}</p> : null}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </Button>
          </form>
        )}
      </SectionReveal>
    </section>
  );
}
