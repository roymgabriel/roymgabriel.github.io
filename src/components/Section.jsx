export default function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">{title}</h2>
      {children}
    </section>
  );
}
