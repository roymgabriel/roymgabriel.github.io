export default function Footer() {
  return (
    <footer className="py-6 bg-gray-50">
      <div className="container mx-auto text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Roy Gabriel. All rights reserved.
      </div>
    </footer>
  );
}
