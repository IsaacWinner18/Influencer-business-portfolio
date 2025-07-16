"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, Star, Award, Menu, X } from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";

export default function BrandsPage() {
  const testimonials = [
    {
      quote:
        "Justada doesn't just create content—she creates movements. Her campaign for our new product launch generated 3.5x ROI and became our most successful influencer partnership to date.",
      author: "Jessica Martinez",
      title: "Marketing Director",
      company: "Nike",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with Justada was a game-changer for our brand awareness. She understood our target audience better than we did and delivered content that truly resonated.",
      author: "Michael Chen",
      title: "Brand Manager",
      company: "Samsung",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Justada's authenticity is unmatched. Her audience trusts her recommendations, which translated directly into sales for our beauty line. We saw a 400% increase in conversions.",
      author: "Emma Rodriguez",
      title: "Digital Marketing Lead",
      company: "Sephora",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const pressFeatures = [
    {
      title: "Forbes 30 Under 30: The Creator Economy's Rising Stars",
      publication: "Forbes",
      date: "December 2023",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title:
        "How Justada Built an 800K Following Through Authentic Storytelling",
      publication: "Entrepreneur",
      date: "October 2023",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Future of Influencer Marketing: A Conversation with Justada",
      publication: "Marketing Land",
      date: "September 2023",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title:
        "Creator Spotlight: Justada on Building Genuine Brand Partnerships",
      publication: "Social Media Today",
      date: "August 2023",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header active="/brands" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Global Brands
            </span>
          </h1>
          <p className="text-md md:text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            From Fortune 500 companies to innovative startups, I've helped
            brands connect with audiences through authentic storytelling that
            drives real business results.
          </p>
        </div>
      </section>

      {/* Brand Logos Wall */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800/30 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {/* Row 1 */}
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Nike"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Sephora"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Samsung"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="L'Oréal"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Adidas"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Apple"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Coca-Cola"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Netflix"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Spotify"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Amazon"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Google"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Microsoft"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Brands Say</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear directly from marketing leaders who've experienced the impact
              of authentic partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-8 space-y-6"
              >
                <Quote className="w-8 h-8 text-yellow-400" />
                <blockquote className="text-lg leading-relaxed text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.title}
                    </div>
                    <div className="text-yellow-400 text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Press & Recognition</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Featured in leading publications and recognized by industry
              experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pressFeatures.map((feature, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white leading-tight group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-yellow-400 font-medium">
                      {feature.publication}
                    </span>
                    <span className="text-gray-400">{feature.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Honored by industry leaders and organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-semibold">Forbes 30 Under 30</h3>
              <p className="text-gray-400">Social Media Category</p>
              <p className="text-sm text-gray-500">2023</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-semibold">Creator Economy Report</h3>
              <p className="text-gray-400">Top 100 Creators</p>
              <p className="text-sm text-gray-500">2023</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-semibold">
                Influencer Marketing Awards
              </h3>
              <p className="text-gray-400">Best Beauty Campaign</p>
              <p className="text-sm text-gray-500">2023</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-semibold">Social Media Week</h3>
              <p className="text-gray-400">Keynote Speaker</p>
              <p className="text-sm text-gray-500">2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create a partnership that drives real results for your brand.
            From strategy to execution, I'll help you connect with your audience
            authentically.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-12 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all inline-flex items-center group"
          >
            Start Our Partnership
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
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
