import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Coffee, Users, Star } from 'lucide-react'

const CTASection = () => {
  const benefits = [
    {
      icon: Coffee,
      title: 'خلطات حصرية',
      description: 'الوصول إلى خلطات القهوة محدودة الإصدار'
    },
    {
      icon: Users,
      title: 'مجتمع القهوة',
      description: 'انضم لآلاف عشاق القهوة'
    },
    {
      icon: Star,
      title: 'تجربة مميزة',
      description: 'معاملة VIP وعروض خاصة'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-coffee-900 via-coffee-800 to-coffee-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              مستعد لبدء
              <span className="block bg-gradient-to-r from-cream-200 to-cream-400 bg-clip-text text-transparent">
                رحلة القهوة؟
              </span>
            </h2>
            
            <p className="text-xl text-cream-100 mb-8 leading-relaxed">
              انضم لمجتمعنا الحصري من محبي القهوة واكتشف عالماً من النكهات المميزة، 
              المعرفة المتخصصة، والتجارب التي لا تُنسى.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/register"
                className="group bg-gradient-to-r from-cream-400 to-cream-500 hover:from-cream-500 hover:to-cream-600 text-coffee-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span>انضم لمجتمعنا</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="group bg-transparent border-2 border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-coffee-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                اعرف المزيد
              </button>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-2 bg-cream-400/20 rounded-full">
                    <benefit.icon className="h-5 w-5 text-cream-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream-100">
                      {benefit.title}
                    </h4>
                    <p className="text-cream-200 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/media/7.jpg"
                alt="تجربة القهوة"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-cream-400 p-4 rounded-full shadow-lg"
              >
                <Coffee className="h-8 w-8 text-coffee-900" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-full shadow-lg"
              >
                <Star className="h-8 w-8 text-coffee-600" />
              </motion.div>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-8 -left-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-coffee-900 mb-1">
                  50K+
                </div>
                <div className="text-coffee-600 text-sm font-medium">
                  عضو سعيد
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection