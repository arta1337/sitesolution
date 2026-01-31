import { redirect } from "next/navigation";

// Redirect /contactos to /auditoria-48h#contacto
// This ensures all lead capture goes through the unified funnel
export default function ContactosPage() {
  redirect("/auditoria-48h#contacto");
}
