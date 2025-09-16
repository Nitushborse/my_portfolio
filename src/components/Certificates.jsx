
import { Card, CardContent } from './ui/Card'
import { motion } from 'framer-motion'



export default function Certificates() {
  const certificates = [
    { name: 'Python Fundamentals for Beginners', img: '/certificates/python.jpg' },
    { name: 'Database for Devlopers', img: '/certificates/sql.jpg' },
    { name: 'AI for India 2.0', img: '/certificates/ai.jpeg' }
  ]


  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Certificates</h2>


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="transition-transform">
              <Card className="overflow-hidden">
                <CardContent className="flex flex-col items-center">
                  <img src={c.img} alt={c.name} className="w-full h-40 object-cover rounded mb-4" />
                  <div className="text-center font-medium">{c.name}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
