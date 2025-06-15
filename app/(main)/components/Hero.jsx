import about from "../constants/about";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-indigo-600">{about.name}</span>
          </h1>
          <p className="mt-4 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
            {about.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}