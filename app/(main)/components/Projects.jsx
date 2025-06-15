import projects from '../constants/projects'
const Projects=()=> {
  return (
    <section id="projects" className="py-12 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Here are some of my recent works
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <div 
      key={project.id} 
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md border border-gray-200 hover:border-indigo-300 transition-all duration-300 ease-in-out hover:-translate-y-1"
    >
      {/* Image with zoom effect */}
      <div className="h-48 bg-slate-200 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-200">
          {project.description}
        </p>
        
        {/* Tags with hover effect */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 group-hover:bg-indigo-100 group-hover:text-indigo-800 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer with enhanced buttons */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between space-x-4">
        <a
          href={project.link}
          className="flex-1 text-center text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:bg-indigo-50 rounded-md py-2 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          className="flex-1 text-center text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:bg-indigo-50 rounded-md py-2 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}
export default Projects