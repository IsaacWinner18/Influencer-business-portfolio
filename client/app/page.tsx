"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Users, Eye, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";

// Counter animation hook
function useCountUp(end: number, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasStarted) return;

    setHasStarted(true);
    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startCount + (end - startCount) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart, hasStarted]);

  return count;
}

// Intersection Observer hook
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView] as const;
}

// Scroll animation hook
function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollAnimation();

  // Stats animation
  const [statsRef, statsInView] = useInView(0.3);
  const followersCount = useCountUp(800, 2000, statsInView);
  const viewsCount = useCountUp(200, 2000, statsInView);
  const brandsCount = useCountUp(150, 2000, statsInView);
  const roiCount = useCountUp(3.5, 2000, statsInView);

  // Section animations
  const [heroRef, heroInView] = useInView(0.1);
  const [featuredRef, featuredInView] = useInView(0.2);
  const [testimonialRef, testimonialInView] = useInView(0.3);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section with parallax */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div ref={heroRef} className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight">
                  Turning Attention into{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Impact
                  </span>
                </h1>
                <p className="text-md md:text-xl text-gray-300 leading-relaxed">
                  800K+ Followers. 150+ Brands. One Voice.
                </p>
                <p className="text-md md:text-lg text-gray-400 max-w-lg">
                  I help brands grow, engage, and convert audiences on TikTok,
                  Instagram, and YouTube through viral storytelling that drives
                  real business results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 md:px-8 py-4 rounded-full font-semibold text-md md:text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all flex items-center justify-center group transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  Work With Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-all flex items-center justify-center group backdrop-blur-sm bg-gray-800/20 hover:bg-gray-800/40 transform hover:scale-105"
                >
                  View Portfolio
                  <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                heroInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1752663373/justada_fdt2qr.jpg"
                  alt="Justada creating content"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              {/* Floating Stats with glassmorphism */}
              <div className="absolute -bottom-6 -left-6 bg-gray-800/60 backdrop-blur-md rounded-xl p-4 border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">800K+ Followers</span>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gray-800/60 backdrop-blur-md rounded-xl p-4 border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">200M+ Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with animated counters */}
      <section
        ref={statsRef}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className={`text-center transition-all duration-700 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {followersCount}K+
              </div>
              <div className="text-gray-300">Total Followers</div>
            </div>
            <div
              className={`text-center transition-all duration-700 delay-100 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {viewsCount}M+
              </div>
              <div className="text-gray-300">Views Generated</div>
            </div>
            <div
              className={`text-center transition-all duration-700 delay-200 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {brandsCount}+
              </div>
              <div className="text-gray-300">Brand Partners</div>
            </div>
            <div
              className={`text-center transition-all duration-700 delay-300 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {roiCount}x
              </div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work with staggered animations */}
      <section ref={featuredRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              featuredInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured Campaigns</h2>
            <p className="text-md md:text-xl text-gray-400 max-w-2xl mx-auto">
              Recent collaborations that drove exceptional results for global
              brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nike Air Max",
                stats: "1.2M views • 15% CTR",
                delay: "delay-0",
              },
              {
                title: "Sephora Beauty",
                stats: "800K views • 12% CTR",
                delay: "delay-200",
              },
              {
                title: "Samsung Galaxy",
                stats: "2.1M views • 18% CTR",
                delay: "delay-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 ${
                  featuredInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${item.delay}`}
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-4 transform group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/placeholder.svg?height=256&width=400"
                    alt={`${item.title} Campaign`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-gray-900/60 backdrop-blur-md rounded-lg p-3 border border-gray-700/50">
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-300 text-sm">{item.stats}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 delay-600 ${
              featuredInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-lg group transform hover:scale-105 transition-all"
            >
              View All Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial with glassmorphism */}
      <section
        ref={testimonialRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20 backdrop-blur-sm"
      >
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            testimonialInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-gray-700/50">
            <blockquote className="text-lg md:text-2xl lg:text-3xl font-light text-gray-300 mb-8 leading-relaxed">
              "Justada doesn't just create content—she creates movements. Her
              campaign for our new product launch generated 3.5x ROI and became
              our most successful influencer partnership to date."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Marketing Director"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold text-white">Jessica Martinez</div>
                <div className="text-gray-400 text-sm">Marketing Director, Nike</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-md md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can amplify your brand's voice and drive real
            business results through authentic storytelling.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all inline-flex items-center group transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800/50 py-12 px-4 sm:px-6 lg:px-8">
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
          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Justada. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA with glassmorphism */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/contact"
          className="bg-gray-800/60 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700/60 transition-all flex items-center group border border-gray-700/50 transform hover:scale-105"
        >
          Book Me
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
