import education from "../constants/education"

export default function Education() {

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            My academic journey and qualifications
          </p>
        </div>

        <div className="mt-16 flow-root">
          <div className="-mb-8">
            {education.map((education, index) => (
              <div key={education.id} className="relative pb-8">
                {index !== education.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 ring-8 ring-gray-50">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        {education.degree} in {education.major}
                      </p>
                      <p className="text-sm text-gray-500">
                        {education.institution}
                      </p>
      
                      <p className="text-sm text-gray-500">
                        {education.description}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={education.year}>{education.year}</time>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}