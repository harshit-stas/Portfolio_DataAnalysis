import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "Sales Analysis using Excel",
      tools: "Excel, PivotTables",
      description: "Analyzed 2 years of sales data to find seasonal trends and top-performing regions."
    },
    {
      title: "Customer Segmentation with Python",
      tools: "Python, Pandas, KMeans",
      description: "Grouped customers into clusters to help marketing team tailor campaigns."
    },
    {
      title: "Power BI Dashboard for HR",
      tools: "Power BI, DAX",
      description: "Interactive dashboard showing attrition rate, hiring trends, and department metrics."
    }
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </main>
  )
}