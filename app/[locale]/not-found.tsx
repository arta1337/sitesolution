import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center py-24">
        <div className="mx-auto max-w-xl px-4 text-center">
          <p className="text-9xl font-bold text-foreground/10">404</p>
          <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            Página não encontrada
          </h1>
          <p className="mt-4 text-muted-foreground">
            A página que procura não existe ou foi movida. Verifique o endereço ou
            volte à página inicial.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Página inicial
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/auditoria-48h">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contactar suporte
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
