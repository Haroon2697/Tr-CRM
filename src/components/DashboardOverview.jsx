"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = value;
    const totalDuration = duration * 1000; // Convert duration to milliseconds
    const startTime = performance.now(); // Track when the animation starts

    const animate = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / totalDuration, 1); // Progress goes from 0 to 1

      const newCount = Math.round(start + (end - start) * progress); // Calculate new count based on progress

      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animating until it's finished
      } else {
        setCount(end); // Ensure the final value is exactly the target
      }
    };

    requestAnimationFrame(animate); // Start the animation

    return () => cancelAnimationFrame(animate); // Clean up on component unmount
  }, [value, duration]);

  return <>{count.toLocaleString()}</>;
};

export default function DashboardOverview() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-Time Analytics Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your business metrics in real-time with our comprehensive analytics dashboard
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {[{ title: "Total Revenue", value: 23220, prefix: "$", suffix: "", color: "bg-blue-600" },
            { title: "Active Users", value: 14, prefix: "", suffix: "", color: "bg-green-600" },
            { title: "Conversion Rate", value: 67, prefix: "", suffix: "%", color: "bg-purple-600" },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
                <div className="flex flex-row items-center justify-between pb-3 mb-6 border-b-2">
                  <span className="text-lg font-semibold text-gray-800">{stat.title}</span>
                  <motion.div
                    className={`w-2.5 h-2.5 rounded-full ${stat.color}`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  />
                </div>
                <div className="text-4xl font-extrabold text-gray-900">
                  {stat.prefix}
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-sm text-gray-600 mt-2">+12.3% from last month</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
