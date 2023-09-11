"use client";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className="flex flex-row gap-4 m-3 font-bold">
      <Link href="/users">Users</Link>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
