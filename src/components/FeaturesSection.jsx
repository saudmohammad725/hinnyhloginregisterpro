import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Award, Heart, Leaf } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Coffee,
      title: 'جودة مميزة',
      description: 'حبوب مختارة يدوياً من أفضل مناطق القهوة عالمياً، محمصة للكمال.',
      image: '/media/3.jpg'
    },
    {
      icon: Award,
      title: 'حائز على جوائز',
      description: 'معترف به عالمياً لجودة القهوة الاستثنائية وطرق التحضير المبتكرة.',
      image: '/media/4.jpg'
    },
    {
      icon: Heart,
      title: 'مصنوع بحب',
      description: 'كل كوب مُحضّر بشغف وتفان من قبل خبراء الباريستا لدينا.',
      image: '/media/5.jpg'
    },
    {
      icon: Leaf,
      title: 'مستدام',
      description: 'ملتزمون بالمصادر الأخلاقية والمسؤولية البيئية في كل خطوة.',
      image: '/media/6.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section className="py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            لماذا تختار قهوتنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختبر الفرق الذي يصنعه الشغف والجودة والحرفية في كل كوب واحد.
          </p>
        </motion.div>

        {/* Moving Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6 py-8"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Repeat images for continuous scroll */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-6 shrink-0">
                  {[
                    '/media/3.jpg',
                    '/media/4.jpg',
                    '/media/5.jpg',
                    '/media/6.jpg',
                    '/media/7.jpg',
                    '/media/unnamed.jpg',
                    '/media/unnamed (1).jpg',
                    '/media/unnamed (2).jpg',
                    '/media/unnamed (3).jpg',
                    '/media/unnamed (4).jpg'
                  ].map((image, index) => (
                    <div key={`${setIndex}-${index}`} className="shrink-0">
                      <img
                        src={image}
                        alt={`قهوة ${index + 1}`}
                        className="w-32 h-32 object-cover rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection