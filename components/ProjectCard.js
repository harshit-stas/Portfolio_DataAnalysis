export default function ProjectCard({ title, tools, description }) {
  return (
    <div className="bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-sm text-blue-400 mb-2">Tools: {tools}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
