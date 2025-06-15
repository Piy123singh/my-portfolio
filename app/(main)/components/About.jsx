import about from '../constants/about'
export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 mb-8 lg:mb-0">
            <div className="aspect-w-3 aspect-h-4 rounded-xl bg-slate-100 overflow-hidden shadow-lg">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              I'm a passionate full stack developer with 3+ years of experience building web applications. 
              Currently pursuing my Bachelor's degree in Computer Science while working on freelance projects.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">Piyush Kumar Singh</p>
                  <p className="text-sm text-slate-500">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">NIT Patna</p>
                  <p className="text-sm text-slate-500">B.S. Computer Science</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-slate-900">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'Next.js', 'MongoDB', 'Tailwind CSS', 'AWS', 'Git', 'Python'].map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}