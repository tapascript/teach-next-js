import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
      <h1 className="text-lg font-bold">
        <Link href="/">Learn Next.js</Link>
      </h1>
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/play">Play</Link>
        <Link href="/store">Store</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}