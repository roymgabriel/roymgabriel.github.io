export default function Badge({ text }) {
  return (
    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
      {text}
    </span>
  );
}
