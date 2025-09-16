
export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600">I'm a React developer skilled in building responsive, user-friendly, and scalable web applications. Proficient in React, Tailwind CSS, Express.js, MongoDB, and JWT Authentication. I enjoy building end-to-end projects and learning new technologies.</p>


          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">React</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">Tailwind</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">Node.js</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  )
}
