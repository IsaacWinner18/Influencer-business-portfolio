"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Eye, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Nike Air Max Campaign",
      brand: "Nike",
      platform: "TikTok",
      views: "1.2M",
      engagement: "15%",
      roi: "3.5x",
      description:
        "Launched the new Air Max collection with a viral dance challenge that generated massive organic reach.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
    },
    {
      id: 2,
      title: "Sephora Beauty Routine",
      brand: "Sephora",
      platform: "Instagram",
      views: "800K",
      engagement: "12%",
      roi: "4.2x",
      description:
        "Created an authentic morning routine featuring new product launches, driving significant sales.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
    },
    {
      id: 3,
      title: "Samsung Galaxy Unboxing",
      brand: "Samsung",
      platform: "YouTube",
      views: "2.1M",
      engagement: "18%",
      roi: "2.8x",
      description:
        "First-look unboxing and review of the latest Galaxy phone, highlighting key features for creators.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
    },
    {
      id: 4,
      title: "L'Oréal Hair Transformation",
      brand: "L'Oréal",
      platform: "Instagram",
      views: "950K",
      engagement: "14%",
      roi: "3.1x",
      description:
        "Documented a complete hair transformation using L'Oréal products over 30 days.",
      image: "/placeholder.svg?height=400&width=600",
      video: false,
    },
    {
      id: 5,
      title: "Adidas Workout Series",
      brand: "Adidas",
      platform: "TikTok",
      views: "1.5M",
      engagement: "16%",
      roi: "3.8x",
      description:
        "5-part fitness series showcasing Adidas activewear through real workout routines.",
      image: "/placeholder.svg?height=400&width=600",
      video: true,
    },
    {
      id: 6,
      title: "Apple iPhone Photography",
      brand: "Apple",
      platform: "Instagram",
      views: "1.1M",
      engagement: "13%",
      roi: "2.9x",
      description:
        "Showcased iPhone camera capabilities through stunning travel photography content.",
      image: "/placeholder.svg?height=400&width=600",
      video: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header active="/portfolio" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Portfolio of{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Explore campaigns that didn't just go viral—they drove real business
            results. Each project represents a strategic partnership that
            amplified brand voices and connected with audiences authentically.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
              All Projects
            </button>
            <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-full hover:border-gray-400 transition-colors">
              TikTok
            </button>
            <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-full hover:border-gray-400 transition-colors">
              Instagram
            </button>
            <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-full hover:border-gray-400 transition-colors">
              YouTube
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Play button for videos */}
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Platform badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.platform}
                    </span>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{project.brand}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-semibold">
                          {project.views} views
                        </div>
                        <div className="text-gray-300 text-sm">
                          {project.engagement} engagement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{project.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">
                          {project.engagement}
                        </span>
                      </div>
                    </div>
                    <div className="text-yellow-400 font-semibold">
                      {project.roi} ROI
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Want to See Detailed Case Studies?
          </h2>
          <p className="text-sm md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get access to in-depth breakdowns of strategy, execution, and
            results for each campaign. Perfect for understanding how we can
            replicate this success for your brand.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all inline-flex items-center group"
          >
            Request Case Studies
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
