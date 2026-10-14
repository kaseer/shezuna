import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">That page is not on the route.</h1>
      <p className="mt-4 max-w-lg text-base leading-7 text-muted">
        The link may be out of date. Return to the homepage, or send the Leeds desk a request.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
    </Container>
  );
}
