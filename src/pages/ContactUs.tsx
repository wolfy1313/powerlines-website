'use client'

import React, { useState } from 'react'
import { ContactUsData } from '@/types/global'
import { Cairo, Roboto_Slab, Raleway } from 'next/font/google'
import Link from 'next/link'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
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
      //   const recipientEmail = 'test@powerlines.org'
      //   const mailtoLink = `mailto:${recipientEmail}?subject=Contact Form Submission&body=Name: ${encodeURIComponent(
      //     contactFormState.name
      //   )}%0AEmail: ${encodeURIComponent(
      //     contactFormState.email
      //   )}%0AMessage: ${encodeURIComponent(contactFormState.message)}`
      //   // Open the default mail client
      //   window.location.href = mailtoLink
      // } else {
      //   //TODO Handle the error case, you can set error messages or highlight the fields
    }
  }

  return (
    <section className="flex flex-col items-center justify-start min-w-screenbg-gray-100 pb-14">
      {/* Header */}
      <section className="flex items-center justify-center w-full  min-h-[368px] bg-cover bg-no-repeat">
        <h1
          className={`text-4xl font-bold text-center text-black ${cairo.className}`}
        >
          CONTACT US
        </h1>
      </section>

      {/* Form Container */}
      <section className="w-full max-w-2xl mx-auto p-8 -mt-24 bg-white  rounded-md md:min-w-[760px] md:min-h-[760px]">
        {/* Form Header */}
        {!submitted && (
          <section className={`text-center mb-10  ${robotoSlab.className}`}>
            <h1
              className={`text-2xl font-bold mb-4 text-[#E88017] ${cairo.className}`}
            >
              We&apos;d love to hear from you.
            </h1>
            <p className="text-md mb-2">
              If you&apos;re interested in joining our efforts, please get in
              touch!
            </p>
            <p className="text-md ">
              Send us a message and someone from our team will
              <br className="hidden  md:block" /> connect with you soon.
            </p>
          </section>
        )}

        {!submitted ? (
          // Ternary to conditionally render form if submitted is false
          <form onSubmit={handleSubmit} className="space-y-10 md:px-24 ">
            <div>
              <label
                htmlFor="name"
                className={`block font-bold text-lg text-gray-700 py-2 ${raleway.className}`}
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
                className={`flex flex-row text-lg font-bold text-gray-700 py-2 ${raleway.className}`}
              >
                Email Address<p className="text-red-600">*</p>
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
                className={`flex flex-row text-lg font-bold text-gray-700 py-2 ${raleway.className}`}
              >
                Message<p className="text-red-600">*</p>
              </label>
              <textarea
                name="message"
                id="message"
                value={contactFormState.message}
                onChange={handleChange}
                rows={8}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`inline-flex justify-center px-8 py-0.5 text-md  rounded-md text-black bg-gradient-to-l from-[#FFD00F] to-[#F89735] font-bold ${raleway.className}`}
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        ) : (
          // If submitted is true, render confirmation
          <section className="text-center md:min-h-[620px]">
            <h1 className="text-2xl font-bold text-[#E88017] mb-5">
              Thank you!
            </h1>
            <p className="text-lg mb-10 text-center flex flex-row justify-center font-thin">
              Your message has been sent. Someone from our team will{' '}
              <br className="hidden md:block px-2" /> connect with you soon.
            </p>
            <Link
              href={'/'}
              className="inline-flex justify-center px-8 py-0.5 text-md  rounded-md text-black bg-gradient-to-l from-[#FFD00F] to-[#F89735] font-bold ${raleway.className}"
            >
              RETURN TO HOMEPAGE
            </Link>
          </section>
        )}
      </section>
    </section>
  )
}

export default ContactUs
