"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, BarChart2, Users, Calendar, Mail, Settings, Zap } from "lucide-react"

const features = [
  {
    icon: BarChart2,
    title: "Advanced Analytics",
    description:
      "Gain deep insights with our AI-powered analytics engine. Transform raw data into actionable insights with real-time dashboards and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Analytics Dashboard",
  },
  {
    icon: Users,
    title: "Intelligent Lead Scoring",
    description:
      "Prioritize leads with machine learning algorithms. Our AI automatically ranks prospects based on their likelihood to convert, helping you focus on high-value opportunities.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Team Collaboration",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "AI-optimized meeting scheduling for maximum efficiency. Automatically find the best meeting times across multiple calendars and time zones.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Calendar Management",
  },
  {
    icon: Mail,
    title: "Predictive Email Marketing",
    description:
      "Personalized email campaigns driven by predictive analytics. Engage your customers with perfectly timed, highly relevant content.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Email Marketing",
  },
  {
    icon: Settings,
    title: "Customizable Workflows",
    description:
      "Design complex, automated workflows with our visual editor. Streamline your processes and eliminate repetitive tasks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Workflow Automation",
  },
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description:
      "Seamless team collaboration with instant updates and notifications. Keep your entire team aligned and productive.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Team Collaboration",
  },
]

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-red-900 via-black to-gray-900"
          style={{ y: backgroundY }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="CRM Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              CRM
            </span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#features" className="text-gray-300 hover:text-red-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-gray-300 hover:text-red-500 transition-colors">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#ai" className="text-gray-300 hover:text-red-500 transition-colors">
                  AI Integration
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-red-500 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, #3b0d0c, #0c0a0a)",
              opacity,
            }}
          />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                The Future of CRM is Here
              </span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl mb-10 max-w-3xl mx-auto text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Harness the power of AI and advanced analytics to transform your customer relationships
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Free Trial
              </button>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-10 h-10 text-red-500 animate-bounce" />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-black/10 z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                Cutting-Edge Features
              </span>
            </motion.h2>
            <div className="space-y-20">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden group">
                      <div className="absolute inset-0">
                        <img
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <feature.icon className="w-8 h-8 text-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-4">
                    <motion.h3
                      className="text-2xl font-bold text-red-400"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                    <motion.button
                      className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      whileHover={{ x: 10 }}
                    >
                      <span>Learn more</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Showcase Section */}
        <section id="showcase" className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-red-900/20 to-black/20 z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                Experience the Future of CRM
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-red-400">Intuitive Interface</h3>
                <p className="text-gray-300">
                  Our CRM boasts a sleek, user-friendly interface that puts all the information you need at your
                  fingertips. Designed with the latest UX principles, it ensures a smooth and efficient workflow for
                  your team.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-300">
                  Explore Interface
                </button>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl group"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80"
                    alt="CRM Interface"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-semibold mb-2 text-red-400">Dashboard Overview</h4>
                    <p className="text-sm text-gray-300">
                      Get a bird's-eye view of your business with our comprehensive dashboard.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Integration Section */}
        <section id="ai" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                    AI-Powered CRM
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our advanced AI integration brings unprecedented intelligence to your CRM:
                </p>
                <ul className="space-y-4">
                  {[
                    "Predictive customer behavior analysis",
                    "Automated data entry and enrichment",
                    "Intelligent chatbots for 24/7 customer support",
                    "Sentiment analysis for customer interactions",
                    "Personalized product recommendations",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="relative h-96 lg:h-auto"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1800&q=80"
                  alt="AI Integration Visualization"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                Flexible Pricing for Every Business
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  features: ["Basic CRM functionality", "Up to 1,000 contacts", "Email integration", "5 user accounts"],
                },
                {
                  name: "Professional",
                  price: "$99",
                  features: [
                    "Advanced CRM features",
                    "Unlimited contacts",
                    "AI-powered insights",
                    "25 user accounts",
                    "Priority support",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Full suite of advanced features",
                    "Dedicated account manager",
                    "Custom AI model training",
                    "Unlimited user accounts",
                    "24/7 premium support",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-red-900/50"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-red-400">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6 text-white">
                    {plan.price}
                    <span className="text-xl font-normal text-gray-400">/month</span>
                  </p>
                  <ul className="mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center mb-2 text-gray-300">
                        <svg
                          className="h-5 w-5 text-red-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors duration-300">
                    Choose Plan
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-red-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Revolutionize Your Customer Relationships?
            </motion.h2>
            <motion.p
              className="text-xl mb-10 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join thousands of businesses that have transformed their CRM experience with our advanced, AI-powered
              platform.
            </motion.p>
            <motion.button
              className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial Today
            </motion.button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">About Us</h3>
              <p className="text-sm">
                We're dedicated to providing the most advanced CRM solution, empowering businesses with AI-driven
                insights and seamless customer management.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-red-500 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#ai" className="hover:text-red-500 transition-colors">
                    AI Integration
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-red-500 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: info@advancedcrm.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Tech Street, San Francisco, CA 94105</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.017 3.811 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">&copy; 2023 AdvancedCRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

