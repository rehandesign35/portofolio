import Link from "next/link";
import { Container } from "@/app/components/layout/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <Container>
        <div className="flex flex-col items-start gap-6">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="font-display text-4xl font-bold md:text-5xl">
            Page not found
          </h1>
          <p className="max-w-md text-lg text-text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-4 rounded-full bg-accent px-7 py-3 font-medium text-background transition-colors hover:bg-accent/90"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
