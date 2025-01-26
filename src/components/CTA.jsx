import React from "react"
import Button from "./Button"

const CTA = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#142F32] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Customer Relationships?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Start your free trial today and experience the power of Trendtial CRM. No credit card required.
        </p>
        <Button className="bg-[#E3FFCC] text-[#142F32] hover:bg-[#E3FFCC]/90 text-lg">Start Your Free Trial</Button>
      </div>
    </section>
  )
}

export default CTA

