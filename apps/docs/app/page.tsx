import Link from "next/link";

const title = "Better Agent";
const description = "Better Agent is in beta. APIs may change as the project evolves. If you run into issues, please open an issue.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
