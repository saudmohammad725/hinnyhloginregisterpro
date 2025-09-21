import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      src: '/media/3.jpg',
      title: 'التحضير المثالي',
      description: 'فن صناعة القهوة بأسلوب احترافي'
    },
    {
      src: '/media/4.jpg',
      title: 'أجواء مريحة',
      description: 'استرخ واستمتع بأجواء هادئة'
    },
    {
      src: '/media/5.jpg',
      title: 'حبوب طازجة',
      description: 'جودة تتذوقها في كل رشفة'
    },
    {
      src: '/media/unnamed.jpg',
      title: 'تجربة مميزة',
      description: 'كل لحظة في حنيه لها طعم خاص'
    },
    {
      src: '/media/unnamed (1).jpg',
      title: 'الضيافة الأصيلة',
      description: 'نستقبلك بحفاوة وكرم عربي'
    },
    {
      src: '/media/unnamed (2).jpg',
      title: 'لحظات لا تُنسى',
      description: 'ذكريات جميلة مع أحبابك'
    },
    {
      src: '/media/unnamed (3).jpg',
      title: 'الطعم الأصيل',
      description: 'نكهات عربية تراثية بلمسة عصرية'
    },
    {
      src: '/media/unnamed (4).jpg',
      title: 'راحة وهدوء',
      description: 'مكان مثالي للاسترخاء والتأمل'
    }
  ]

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            معرض القهوة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            انغمس في عالم القهوة الجميل من خلال مجموعتنا المختارة من اللحظات والذكريات.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer group"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              onClick={() => openLightbox(image, index)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-2 h-2 bg-coffee-600 rounded-full"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-coffee-600 transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                  {image.description}
                </p>
                
                {/* Bottom accent */}
                <div className="mt-4 h-1 bg-gradient-to-r from-coffee-600 to-coffee-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <h3 className="text-2xl font-display font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-cream-200">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection