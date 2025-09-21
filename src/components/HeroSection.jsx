import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/media/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
            مرحباً بك في
            <span className="block text-cream-200">
              كافيه حنيه
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-cream-100 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          اكتشف المزيج المثالي بين التقليد والابتكار. كل كوب يحكي قصة من الشغف، 
          الحرفية، وأجود أنواع البن من حول العالم.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <button
            onClick={() => window.location.href = '/login'}
            className="group bg-gradient-to-r from-cream-400 to-cream-500 hover:from-cream-500 hover:to-cream-600 text-coffee-900 font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 text-sm"
          >
            <span>تسجيل الدخول</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default HeroSection