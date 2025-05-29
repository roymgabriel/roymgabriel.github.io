export default function Footer() {
  return (
    <footer className="py-6 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-6">
        <div>© {new Date().getFullYear()} Roy Gabriel</div>
        <div className="flex flex-wrap space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/roymgabriel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/roy-makkar-gabriel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:makademyllc@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
