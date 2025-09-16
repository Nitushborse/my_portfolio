
import { Mail, Github, Linkedin } from 'lucide-react'


export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out via email or connect on socials</p>


        <div className="flex items-center justify-center gap-4">
          <a href="mailto:yourmail@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border hover:shadow-md">
            <Mail /> <span>bhavesh1182003@gmail.com</span>
          </a>


          <a href="https://github.com/Nitushborse" target="_blank" className="p-3 rounded-full bg-white border hover:shadow-md">
            <Github />
          </a>


          <a href="linkedin.com/in/bhavesh-patil-344307307" target="_blank" className="p-3 rounded-full bg-white border hover:shadow-md">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  )
}
