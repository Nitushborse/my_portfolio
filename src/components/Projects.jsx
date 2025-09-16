

import React from 'react'
import { Card, CardContent } from './ui/Card'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'


export default function Projects() {
  const projects = [
    {
      title: 'HomeAssist Marketplace',
      desc: 'React-based online marketplace.',
      tech: 'React, Tailwind',
      link: 'https://your-homeassist-link.com',
      github: 'https://github.com/yourusername/homeassist'
    },
    {
      title: 'Blogging Site',
      desc: 'Blog platform with Firebase backend.',
      tech: 'React, Firebase',
      link: 'https://your-blog-link.com',
      github: 'https://github.com/yourusername/blogging-site'
    },
    {
      title: 'HomeAssist Backend',
      desc: 'Express.js + MongoDB with JWT authentication.',
      tech: 'Node.js, MongoDB',
      link: 'https://your-backend-link.com',
      github: 'https://github.com/yourusername/homeassist-backend'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="transition-transform">
              <Card className="hover:shadow-xl">
                <CardContent>
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-4">{p.desc}</p>


                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.split(', ').map((t) => (
                      <span key={t} className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>


                  <div className="flex items-center gap-3">
                    <a href={p.link} target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                      <ExternalLink size={16} /> Live
                    </a>
                    <a href={p.github} target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
