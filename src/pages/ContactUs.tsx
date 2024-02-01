'use client'

import React, { useState } from 'react'
import { ContactUsData } from '@/types/global'
import { Josefin_Sans, Playfair_Display, Raleway } from 'next/font/google'
import Link from 'next/link'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

function ContactUs() {
  const [contactFormState, setContactFormState] = useState<ContactUsData>({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setContactFormState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Check if any of the form fields are empty
    const isFormValid = Object.values(contactFormState).every(
      (value) => value.trim() !== ''
    )

    if (isFormValid) {
      setSubmitted(true)
      // Create a mailto link with the form data and recipient email
      const recipientEmail = 'test@powerlines.org'
      const mailtoLink = `mailto:${recipientEmail}?subject=Contact Form Submission&body=Name: ${encodeURIComponent(
        contactFormState.name
      )}%0AEmail: ${encodeURIComponent(
        contactFormState.email
      )}%0AMessage: ${encodeURIComponent(contactFormState.message)}`
      // Open the default mail client
      window.location.href = mailtoLink
    } else {
      //TODO Handle the error case, you can set error messages or highlight the fields
    }
  }

  return (
    <section className="flex flex-col items-center justify-start min-w-screenbg-gray-100 pb-14">
      {/* Header */}
      <section className="flex items-center justify-center w-full bg-[url('/contactushero.svg')] min-h-[368px] bg-cover bg-no-repeat">
        <h1
          className={`text-4xl font-bold text-center text-black ${josefinSans.className}`}
        >
          CONTACT US
        </h1>
      </section>

      {/* Form Container */}
      <section
        className="w-full max-w-2xl mx-auto p-8 -mt-24 bg-white shadow-lg rounded-md md:min-w-[760px] md:min-h-[760px]"
        style={{
          backgroundImage: "url('/contactusbg.svg')",
          backgroundSize: 'cover',
          minHeight: '368px'
        }}
      >
        {/* Form Header */}
        {!submitted && (
          <section
            className={`text-center mb-10 ${playfairDisplay.className} `}
          >
            <h1
              className={`text-2xl font-bold mb-4 text-main-one ${josefinSans.className}`}
            >
              We&apos;d love to hear from you.
            </h1>
            <p className="text-md mb-2">
              If you&apos;re interested in joining our efforts, please get in
              touch!
            </p>
            <p className="text-md">
              Send us a message and someone from our team will connect with you
              soon.
            </p>
          </section>
        )}

        {!submitted ? (
          // Ternary to conditionally render form if submitted is false
          <form onSubmit={handleSubmit} className="space-y-6 md:px-24 ">
            <div>
              <label
                htmlFor="name"
                className={`block text-lg font-medium text-gray-700 ${raleway.className}`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={contactFormState.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-lg font-medium text-gray-700 ${raleway.className}`}
              >
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactFormState.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block text-lg font-medium text-gray-700 ${raleway.className}`}
              >
                Message*
              </label>
              <textarea
                name="message"
                id="message"
                value={contactFormState.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-full text-black bg-main-one hover:bg-main-two focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${raleway.className}`}
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          // If submitted is true, render confirmation
          <section className="text-center md:min-h-[620px]">
            <h1 className="text-2xl font-bold text-main-one">Thank you!</h1>
            <p className="text-md mb-10 text-center flex flex-row justify-center">
              Your message has been sent. Someone from our team will connect
              with you soon.
            </p>
            <Link href={'/'} className="bg-main-one rounded-full py-1 px-6 ">
              RETURN TO HOMEPAGE
            </Link>
          </section>
        )}
      </section>
    </section>
  )
}

export default ContactUs
