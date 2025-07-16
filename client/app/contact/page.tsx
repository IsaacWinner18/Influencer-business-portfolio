"use client";

import type React from "react";

import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Calendar, Send } from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header active="/contact" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
            Let's Create Something{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            Ready to amplify your brand's voice and connect with audiences
            authentically? I'd love to hear about your vision and explore how we
            can bring it to life together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-2xl p-8">
              <h2 className="text-xl md:text-3xl font-bold mb-8">
                Start Our Conversation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company/Brand
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                  >
                    <option value="">Select project type</option>
                    <option value="sponsored-content">Sponsored Content</option>
                    <option value="ugc">UGC & Product Reviews</option>
                    <option value="consulting">
                      Brand Strategy Consulting
                    </option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Share your vision, goals, timeline, and any specific requirements. The more details you provide, the better I can understand how to help you succeed."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  I'm always excited to explore new partnerships and creative
                  opportunities. Whether you're looking to launch a campaign,
                  need strategic guidance, or want to discuss a speaking
                  engagement, I'm here to help.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">hello@sarahchen.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Los Angeles, CA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link
                    href="/services"
                    className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
                  >
                    <span>View Services & Pricing</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
                  >
                    <span>Browse Portfolio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/brands"
                    className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
                  >
                    <span>See Brand Partnerships</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Follow My Journey
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm font-semibold">IG</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm font-semibold">TT</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm font-semibold">YT</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm font-semibold">LI</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about working together
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                What's your typical project timeline?
              </h3>
              <p className="text-gray-400">
                Most projects take 2-4 weeks from initial consultation to final
                delivery, depending on scope and complexity. Rush projects can
                be accommodated with additional fees.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Do you work with small businesses?
              </h3>
              <p className="text-gray-400">
                I work with brands of all sizes, from startups to Fortune 500
                companies. Every partnership is tailored to fit your budget and
                goals.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                What platforms do you create content for?
              </h3>
              <p className="text-gray-400">
                I specialize in TikTok, Instagram, and YouTube, but can adapt
                content for other platforms as needed. Each piece is optimized
                for the specific platform's audience and format.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                How do you ensure brand alignment?
              </h3>
              <p className="text-gray-400">
                I only partner with brands I genuinely use and believe in. We'll
                have detailed discussions about your values, messaging, and
                goals to ensure perfect alignment before moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">JUSTADA</div>
              <p className="text-gray-400 max-w-md">
                Content creator and brand strategist helping companies connect
                with audiences through authentic storytelling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/portfolio"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  TikTok
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Justada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
