import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <Container>
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Rehan. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
