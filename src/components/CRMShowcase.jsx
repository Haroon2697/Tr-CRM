import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  { src: "/crm-dashboard.jpg", alt: "CRM Dashboard" },
  { src: "/customer-profile.jpg", alt: "Customer Profile" },
  { src: "/analytics-view.jpg", alt: "Analytics View" },
  { src: "/task-management.jpg", alt: "Task Management" },
  { src: "/email-integration.jpg", alt: "Email Integration" },
]

const CRMShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
            Experience Our CRM in Action
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CRMShowcase

