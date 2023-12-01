
export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
      <h1 className="text-lg font-bold"><a href="/">Learn Next.js</a></h1>
      <nav className="flex space-x-6">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/play">Play</a>
        <a href="/store">Store</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}