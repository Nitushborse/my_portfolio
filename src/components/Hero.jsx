
import { motion } from 'framer-motion'
import { Button } from './ui/Button'


export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Bhavesh</span> 👋
          </motion.h1>


          <p className="text-lg text-gray-600 mb-6">A passionate <strong className="text-indigo-600">React.js & Web Developer</strong> building modern, responsive web applications.</p>


          <div className="flex flex-wrap gap-4">
            <a href="#projects"><Button className="shadow-lg">View Projects</Button></a>
            <a href="/resume.pdf" target="_blank"><Button variant="outline">Download Resume</Button></a>
          </div>


        </div>
      </div>
    </section>
  )
}
