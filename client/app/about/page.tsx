"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-white">
              JUSTADA
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-yellow-400 font-semibold">
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/brands"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Brands & Press
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all"
            >
              Work With Me
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Slide Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <span className="text-xl font-bold">JUSTADA</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/about"
              className="text-yellow-400 font-semibold py-3 px-4 rounded-lg bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/brands"
              className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands & Press
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-800">
              <Link
                href="/contact"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Building Bridges Between{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Brands & People
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm Justada, and I believe in the power of authentic
                  storytelling to create genuine connections that drive real
                  business results.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    800K+
                  </div>
                  <div className="text-sm text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    200M+
                  </div>
                  <div className="text-sm text-gray-400">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    150+
                  </div>
                  <div className="text-sm text-gray-400">Brands</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Justada portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg leading-relaxed text-gray-300">
            <p>
              My journey didn't start with a master plan to become a content
              creator. It began with a simple desire to share stories that
              mattered—stories about real people, authentic experiences, and the
              brands that genuinely improve our lives.
            </p>

            <p>
              What started as weekend content creation quickly evolved into
              something much bigger. I discovered that my ability to connect
              with audiences wasn't just about entertainment—it was about
              building trust, sparking conversations, and ultimately driving
              meaningful action.
            </p>

            <p>
              Today, I work with some of the world's most recognizable brands,
              from Nike and Sephora to Samsung and L'Oréal. But what I'm most
              proud of isn't the follower count or the brand partnerships—it's
              the community we've built together and the real impact we've
              created.
            </p>

            <p>
              Every campaign I take on is guided by one principle: authenticity
              drives results. When brands align with creators who genuinely
              believe in their mission, magic happens. That's where I come in.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Believe In</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These principles guide every partnership and piece of content I
              create
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-8 text-center space-y-6 hover:bg-gray-800/70 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold">Authenticity First</h3>
              <p className="text-gray-400">
                I only partner with brands I genuinely use and believe in. My
                audience trusts me because I trust the products I promote.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 text-center space-y-6 hover:bg-gray-800/70 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold">Results-Driven</h3>
              <p className="text-gray-400">
                Beautiful content is just the beginning. I focus on creating
                campaigns that drive measurable business outcomes.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 text-center space-y-6 hover:bg-gray-800/70 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold">Community Impact</h3>
              <p className="text-gray-400">
                Every piece of content should add value to my audience's lives,
                whether through entertainment, education, or inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Honored to be recognized by industry leaders and publications
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <Award className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="font-semibold">Forbes 30 Under 30</h3>
              <p className="text-sm text-gray-400">Social Media Category</p>
            </div>

            <div className="text-center space-y-3">
              <Award className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="font-semibold">Creator Economy Report</h3>
              <p className="text-sm text-gray-400">Top 100 Creators</p>
            </div>

            <div className="text-center space-y-3">
              <Award className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="font-semibold">Influencer Marketing Awards</h3>
              <p className="text-sm text-gray-400">Best Beauty Campaign</p>
            </div>

            <div className="text-center space-y-3">
              <Award className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="font-semibold">Social Media Week</h3>
              <p className="text-sm text-gray-400">Keynote Speaker</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Create Something Meaningful Together
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to build authentic connections with your audience? I'd love to
            hear about your brand's story and explore how we can amplify it.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-12 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all inline-flex items-center group"
          >
            Start Our Conversation
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
