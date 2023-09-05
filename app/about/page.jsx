import Link from "next/link";
export default function AboutPage() {
  // throw new Error("No about page!")
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, world</h1>
      <Link href="/">Link to Home</Link>
      <div>
        <Link href="/users">Link to users</Link>
      </div>
    </>
  );
}
