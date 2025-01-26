import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import DashboardOverview from "../components/DashboardOverview"
import CustomerInsights from "../components/CustomerInsights"
import LeadManagement from "../components/LeadManagement"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <DashboardOverview />
      <Features />
      <CustomerInsights />
      <LeadManagement />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default LandingPage

