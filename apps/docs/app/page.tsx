import Link from "next/link";

const title = "Better Agent";
const description = "A TypeScript framework for building typed, event-driven, framework-agnostic agent apps.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
