import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'http://localhost:5000/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      setStatus(data.message)

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setStatus('Failed to send message')
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 bg-slate-950 border border-slate-700 rounded-xl outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 bg-slate-950 border border-slate-700 rounded-xl outline-none"
          />

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-4 bg-slate-950 border border-slate-700 rounded-xl outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-cyan-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact