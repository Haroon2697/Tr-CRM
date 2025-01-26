import React from "react"
import { Facebook, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "API"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Guides", "Webinars", "Case Studies"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Contact"],
    },
    {
      title: "Connect",
      email: "support@trendtial.com",
      socials: [
        { icon: Linkedin, href: "#" },
        { icon: Youtube, href: "#" },
        { icon: Facebook, href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {sections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              {section.links ? (
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="text-gray-400">{section.email}</p>
                  <div className="flex space-x-4">
                    {section.socials?.map((social, k) => (
                      <a key={k} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">© 2024 Trendtial CRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

