"use client"

import React, { useState } from "react"
import { BarChart3, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import BackgroundPattern from "./BackgroundPattern"

const TabContent = ({ children, active }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
)

const CustomerInsights = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const tabs = ["Overview", "Contacts", "Sales", "Gallery"]

  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
  ]

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      <BackgroundPattern />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Empower Your Business with Our CRM</h2>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === index ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          <TabContent active={activeTab === 0}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Customer Insights</h3>
                <p className="text-gray-600 mb-4">
                  Gain deep insights into your customer base and optimize your relationships.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">2,547</div>
                    <div className="text-sm text-gray-600">Active Contacts</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">89%</div>
                    <div className="text-sm text-gray-600">Engagement Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={images[0] || "/placeholder.svg"}
                  alt="CRM Dashboard"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </TabContent>

          <TabContent active={activeTab === 1}>
            <h3 className="text-2xl font-semibold mb-4">People and Organizations</h3>
            <div className="space-y-4">
              {[
                { name: "Amanda Kelly", email: "amanda@example.com", location: "New York", image: images[1] },
                { name: "Jacob Jones", email: "jacob@example.com", location: "London", image: images[2] },
                { name: "Celia", email: "celia@example.com", location: "Paris", image: images[3] },
                { name: "Sarah Matt", email: "sarah@example.com", location: "Tokyo", image: images[4] },
                { name: "Cole Geep", email: "cole@example.com", location: "Berlin", image: images[5] },
              ].map((contact, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <img
                      src={contact.image || "/placeholder.svg"}
                      alt={contact.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                      <div className="text-xs text-gray-500">{contact.location}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{contact.email}</div>
                </div>
              ))}
            </div>
          </TabContent>

          <TabContent active={activeTab === 2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Sales Performance</h3>
                <p className="text-gray-600 mb-4">Track your sales performance and identify growth opportunities.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">$1.2M</div>
                    <div className="text-sm text-gray-600">Monthly Revenue</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">32%</div>
                    <div className="text-sm text-gray-600">Growth Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={images[6] || "/placeholder.svg"}
                  alt="Sales Chart"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </TabContent>

          <TabContent active={activeTab === 3}>
            <div className="relative">
              <img
                src={images[currentImage] || "/placeholder.svg"}
                alt={`CRM Screenshot ${currentImage + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </TabContent>
        </div>
      </div>
    </section>
  )
}

export default CustomerInsights

