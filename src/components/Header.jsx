import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold">Roy Gabriel, PhD</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/research">Research</Link>
        </nav>
      </div>
    </header>
  );
}
