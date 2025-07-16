"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Users,
  Video,
  Mic,
  Lightbulb,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";

export default function ServicesPage() {
  const services = [
    {
      icon: Video,
      title: "Sponsored Content Creation",
      description:
        "Authentic, engaging content that seamlessly integrates your brand message while maintaining my unique voice and style.",
      features: [
        "Platform-optimized content (TikTok, Instagram, YouTube)",
        "Multiple content formats (Reels, Stories, Posts, Videos)",
        "Brand integration that feels natural and authentic",
        "Performance tracking and optimization",
        "Content rights and usage licensing",
      ],
      pricing: "Starting at $15,000",
      popular: true,
    },
    {
      icon: Users,
      title: "UGC & Product Reviews",
      description:
        "Genuine product experiences and reviews that build trust and drive conversions through authentic storytelling.",
      features: [
        "Unboxing and first impression content",
        "In-depth product testing and reviews",
        "Before/after transformation content",
        "Tutorial and how-to content",
        "Long-term product journey documentation",
      ],
      pricing: "Starting at $8,000",
      popular: false,
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy Consulting",
      description:
        "Strategic guidance on creator partnerships, content strategy, and audience engagement to maximize your brand's impact.",
      features: [
        "Creator partnership strategy development",
        "Content strategy and planning",
        "Audience analysis and insights",
        "Campaign optimization recommendations",
        "Industry trend analysis and forecasting",
      ],
      pricing: "Starting at $5,000",
      popular: false,
    },
    {
      icon: Mic,
      title: "Speaking Engagements",
      description:
        "Keynote presentations and panel discussions on creator economy, authentic marketing, and building genuine brand connections.",
      features: [
        "Keynote presentations at conferences",
        "Panel discussions and fireside chats",
        "Workshop facilitation",
        "Virtual and in-person availability",
        "Custom presentation development",
      ],
      pricing: "Starting at $12,000",
      popular: false,
    },
  ];

  const caseStudies = [
    {
      title: "Nike Air Max Launch",
      challenge: "Launch new product line to Gen Z audience",
      solution: "Created viral TikTok dance challenge featuring the shoes",
      results: "1.2M views, 15% CTR, 3.5x ROI",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sephora Beauty Campaign",
      challenge: "Increase brand awareness among young professionals",
      solution: "Authentic morning routine content series",
      results: "800K views, 12% engagement, 4.2x ROI",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Samsung Galaxy Review",
      challenge: "Showcase new phone features to creators",
      solution: "Comprehensive creator-focused review content",
      results: "2.1M views, 18% engagement, 2.8x ROI",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header active="/services" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            How I Can{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Help You
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            From viral content creation to strategic consulting, I offer
            comprehensive services designed to amplify your brand's voice and
            drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 rounded-2xl p-8 ${
                  service.popular ? "ring-2 ring-yellow-400" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-yellow-400 font-semibold">
                        {service.pricing}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how strategic partnerships have driven exceptional outcomes
              for brands across industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{study.title}</h3>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-yellow-400 font-medium text-sm">
                        Challenge
                      </h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-yellow-400 font-medium text-sm">
                        Solution
                      </h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-yellow-400 font-medium text-sm">
                        Results
                      </h4>
                      <p className="text-gray-300 text-sm font-semibold">
                        {study.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A strategic approach that ensures every partnership delivers
              maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">Discovery</h3>
              <p className="text-gray-400">
                Deep dive into your brand, goals, and target audience to
                understand the perfect partnership fit.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Strategy</h3>
              <p className="text-gray-400">
                Develop a comprehensive content strategy that aligns with your
                objectives and resonates with my audience.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">Creation</h3>
              <p className="text-gray-400">
                Produce high-quality, authentic content that seamlessly
                integrates your brand message.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto text-black font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold">Optimization</h3>
              <p className="text-gray-400">
                Monitor performance, analyze results, and optimize future
                content for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Custom Pricing for Every Partnership
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Every brand is unique, and so is every partnership. I work with you
            to create a custom package that fits your budget and delivers
            exceptional value. Pricing varies based on scope, timeline, and
            deliverables.
          </p>
          <div className="bg-gray-800/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              What's Included in Every Partnership:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Strategy consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Content creation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Performance reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Usage rights</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Revisions included</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Dedicated support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Amplify Your Brand?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your goals and create a partnership that drives real
            results. I'm here to help you connect with your audience
            authentically and meaningfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-12 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all inline-flex items-center justify-center group"
            >
              Start Our Partnership
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-gray-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-all inline-flex items-center justify-center"
            >
              View My Work
            </Link>
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
