"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";

import AOSInitializer from "../components/AOSInitializer";
import Link from "next/link";

const FaqItem = ({ question, answer, aosDelay }) => (
  <details
    className="group border-b border-slate-200 py-4"
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    <summary className="flex items-center justify-between font-semibold text-lg cursor-pointer list-none">
      <span>{question}</span>
      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
    </summary>
    <p className="mt-4 text-gray-600">{answer}</p>
  </details>
);

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    // A more modern way to show feedback without `alert()`
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.innerHTML = "Message Sent!";
    submitButton.disabled = true;
    setTimeout(() => {
      submitButton.innerHTML = "Send Message <Send size={20} />";
      submitButton.disabled = false;
      form.reset();
    }, 3000);
  };

  return (
    <div className="bg-slate-50 text-gray-800">
      <AOSInitializer />

      <div className="relative pt-12 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center" data-aos="fade-up">
            <p className="text-base font-semibold text-green-600 uppercase tracking-wider">
              Get in Touch
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
              Let's Connect
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you have a project idea or just want to chat, my inbox is
              always open.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="-mt-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative bg-white shadow-2xl rounded-2xl grid md:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Left Column: Contact Info */}
            <div className="p-8 md:p-12 space-y-12 bg-green-600 text-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              <div>
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-green-100">
                  Fill up the form and I will get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-6">
                <a
                  href="tel:+905415654560"
                  className="flex items-center space-x-3 group"
                >
                  <Phone className="w-5 h-5 text-green-200" />
                  <span className="group-hover:underline">
                    +90 (541) 565 45 60
                  </span>
                </a>
                <a
                  href="mailto:hasamuddin.afz@gmail.com"
                  className="flex items-center space-x-3 group"
                >
                  <Mail className="w-5 h-5 text-green-200" />
                  <span className="group-hover:underline">
                    hasamuddin.afz@gmail.com
                  </span>
                </a>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-200" />
                  <span>Karabük, Turkey</span>
                </div>
              </div>
              <div className="flex space-x-4 pt-6">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/hasamuddin-afzali/"
                  className="p-2 bg-green-500/50 rounded-full hover:bg-green-500 transition-colors"
                >
                  <SiLinkedin className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/hasamuddinafz"
                  className="p-2 bg-green-500/50 rounded-full hover:bg-green-500 transition-colors"
                >
                  <SiGithub className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/hasam.afzali/"
                  className="p-2 bg-green-500/50 rounded-full hover:bg-green-500 transition-colors"
                >
                  <SiInstagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="mt-1 w-full p-3 border-b-2 border-slate-200 bg-transparent focus:outline-none focus:border-green-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    required
                    className="mt-1 w-full p-3 border-b-2 border-slate-200 bg-transparent focus:outline-none focus:border-green-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="How can I help you?"
                    required
                    className="mt-1 w-full p-3 border-b-2 border-slate-200 bg-transparent focus:outline-none focus:border-green-500 transition-colors duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find quick answers to common questions about my services and
              availability.
            </p>
          </div>
          <div className="space-y-4">
            <FaqItem
              question="How do you approach project deadlines and delivery?"
              answer="I prioritize clear communication and realistic timelines. I ensure you’re updated regularly and deliver quality work on time."
              aosDelay="100"
            />
            <FaqItem
              question="Can you work with existing codebases or legacy projects?"
              answer="Absolutely. I’m experienced in diving into existing projects, understanding their structure, and making enhancements without disrupting functionality."
              aosDelay="200"
            />
            <FaqItem
              question="Do you offer post-launch support and maintenance?"
              answer="Yes, I provide ongoing support to help you with updates, bug fixes, and performance improvements after your project goes live."
              aosDelay="300"
            />
            <FaqItem
              question="Which technologies do you prefer and why?"
              answer="I prefer modern frameworks like React and Next.js for their flexibility and performance, combined with robust backend solutions like .NET or Node.js."
              aosDelay="400"
            />
            <FaqItem
              question="How do you handle feedback and revisions during a project?"
              answer="Feedback is crucial. I welcome your input at every stage and iterate quickly to ensure the final product aligns perfectly with your vision."
              aosDelay="500"
            />
            <FaqItem
              question="What’s your experience with responsive and accessible design?"
              answer="I build interfaces that look great on all devices and follow accessibility best practices to make sure everyone can use your site easily."
              aosDelay="600"
            />
            <FaqItem
              question="Can you help with SEO optimization and performance?"
              answer="Definitely! I incorporate SEO-friendly techniques and optimize loading speeds to boost your website’s visibility and user experience."
              aosDelay="700"
            />
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section id="map" className="py-20 md:py-28 bg-slate-50">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96099.0069904772!2d32.59733224095598!3d41.20361280931535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409b6ee55523956d%3A0x2f6412f55a15383!2sKarab%C3%BCk%2C%20Karab%C3%BCk%20Merkez%2FKarab%C3%BCk%2C%20T%C3%BCrkiye!5e0!3m2!1str!2s!4v1687671373972!5m2!1str!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
