import Link from "next/link";

const title = "create-better-agent";
const description = "Initialize Better Agent in an existing app";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
