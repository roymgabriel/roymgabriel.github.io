export default function Card({ heading, sub, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium">{heading}</h3>
      {sub && <p className="text-sm italic text-gray-600">{sub}</p>}
      <div className="mt-2 prose prose-sm">{children}</div>
    </div>
  );
}
