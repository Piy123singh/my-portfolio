import Navbar from './(main)/components/Navbar'
import Hero from './(main)/components/Hero'
import About from './(main)/components/About'
import Education from './(main)/components/Education'
import Projects from './(main)/components/Projects'
import Footer from './(main)/components/Footer'
import Contact from './(main)/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact/>
      </div>
      <Footer />
    </main>
  )
}