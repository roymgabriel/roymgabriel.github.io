import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 bg-white shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <h1 className="text-2xl font-bold">
          <Link href="/">Roy Gabriel</Link>
        </h1>
        <nav className="flex flex-wrap items-center space-x-4 text-gray-600 mt-4 md:mt-0">
          <Link href="/resume">Resume</Link>
          <Link href="/research">Research</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </div>
    </header>
)
}
