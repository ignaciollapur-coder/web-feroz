"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionContainer from "@/components/layout/SectionContainer";
import { CONTACT } from "@/data/siteContent";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Ingresá tu nombre completo"),
  email: z.string().email("Ingresá un email válido"),
  company: z.string().min(1, "Ingresá el nombre de tu empresa"),
  service: z.string().min(1, "Seleccioná un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (_data: FormValues) => {
    // V1: simulate async submit — connect to Formspree / Resend in V1.1
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <SectionContainer id="contact">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            {CONTACT.headline}
          </h2>
          <p className="text-muted-foreground">{CONTACT.subheadline}</p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <CheckCircle2 size={48} className="text-accent" />
            <h3 className="text-xl font-semibold text-primary">¡Mensaje recibido!</h3>
            <p className="text-muted-foreground max-w-sm">
              Nos comunicaremos con vos en menos de 24 horas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Nombre completo *</Label>
                <Input id="name" placeholder="Juan Pérez" {...register("name")} aria-invalid={!!errors.name} />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="juan@empresa.com" {...register("email")} aria-invalid={!!errors.email} />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="company">Empresa *</Label>
                <Input id="company" placeholder="Empresa S.A." {...register("company")} aria-invalid={!!errors.company} />
                {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="service">Servicio de interés *</Label>
                <Select onValueChange={(v) => setValue("service", v as string, { shouldValidate: true })}>
                  <SelectTrigger id="service" aria-invalid={!!errors.service}>
                    <SelectValue placeholder="Seleccioná un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONTACT.serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Mensaje *</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Contanos brevemente sobre tu proyecto o consulta..."
                {...register("message")}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        )}
      </div>
    </SectionContainer>
  );
}
