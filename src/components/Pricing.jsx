import React from "react"
import { Check } from "lucide-react"
import Button from "./Button"

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses and startups.",
      features: ["Up to 1,000 contacts", "Basic reporting", "Email integration", "Mobile app access"],
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with advanced needs.",
      features: ["Up to 10,000 contacts", "Advanced reporting & analytics", "Sales automation", "API access"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations.",
      features: ["Unlimited contacts", "Custom integrations", "Dedicated account manager", "24/7 premium support"],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose the Right Plan for Your Business</h2>
          <p className="text-gray-600">Flexible pricing options to suit businesses of all sizes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#142F32] transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {plan.price} <span className="text-sm font-normal text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <Button className="w-full mb-8 bg-[#142F32] text-white hover:bg-[#142F32]/90">Get Started</Button>
              <div className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

