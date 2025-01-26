import React from "react"
import { ArrowUpRight, Box, LineChart, Shield, Sparkles, Truck, Wrench } from "lucide-react"

const Features = () => {
  const features = [
    {
      title: "Contact Management",
      description: "Centralize and organize all your customer information in one place.",
      icon: Sparkles,
    },
    {
      title: "Sales Automation",
      description: "Streamline your sales process with intelligent automation tools.",
      icon: Box,
    },
    {
      title: "Reporting & Analytics",
      description: "Gain valuable insights with customizable reports and dashboards.",
      icon: LineChart,
    },
    {
      title: "Task Management",
      description: "Stay on top of your to-do list with integrated task management.",
      icon: Wrench,
    },
    {
      title: "Email Integration",
      description: "Seamlessly connect your email for efficient communication tracking.",
      icon: Shield,
    },
    {
      title: "Mobile Access",
      description: "Access your CRM on-the-go with our powerful mobile application.",
      icon: Truck,
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#142F32]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful CRM Features</h2>
          <p className="text-gray-300">Boost your sales and customer relationships with our comprehensive toolset.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#142F32] border border-gray-800 hover:border-[#E3FFCC] transition-colors group"
            >
              <div className="flex items-start justify-between">
                <feature.icon className="h-8 w-8 text-[#E3FFCC]" />
                <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-[#E3FFCC] transition-colors" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

