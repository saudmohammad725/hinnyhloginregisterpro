import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, CreditCard, Send, BarChart3 } from 'lucide-react';

const InfoSections = () => {
  const sections = [
    {
      id: 1,
      title: 'نظام الولاء الذكي',
      description: 'منصة متطورة لإدارة نقاط الولاء بطريقة سهلة وسريعة. احصل على نقاط مع كل شراء واستمتع بالمكافآت الحصرية.',
      image: '/media/card.png',
      icon: Coffee,
      imagePosition: 'right'
    },
    {
      id: 2,
      title: 'شراء النقاط بسهولة',
      description: 'اشترِ نقاط الولاء فوراً بطرق دفع متعددة وآمنة. نظام مرن يتيح لك زيادة رصيدك متى شئت.',
      image: '/media/buypoinst.png',
      icon: CreditCard,
      imagePosition: 'left'
    },
    {
      id: 3,
      title: 'تحويل النقاط السريع',
      description: 'حوّل نقاطك لأصدقائك وعائلتك فوراً باستخدام رقم الهاتف فقط. سهولة وأمان في التحويل.',
      image: '/media/transfer.png',
      icon: Send,
      imagePosition: 'right'
    },
    {
      id: 4,
      title: 'تقارير وإحصائيات',
      description: 'تابع رصيدك وتاريخ معاملاتك بتفاصيل دقيقة. إحصائيات شاملة لنشاطك ومكافآتك.',
      image: '/media/statistics.png',
      icon: BarChart3,
      imagePosition: 'left'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 ${
                section.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`${section.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-coffee-600 rounded-full mr-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {section.description}
                </p>
              </div>

               {/* Image */}
               <div className={`${section.imagePosition === 'left' ? 'lg:col-start-1' : ''} flex justify-center`}>
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   transition={{ type: "spring", stiffness: 300 }}
                   className="relative overflow-hidden rounded-xl max-w-xs"
                 >
                   <img
                     src={section.image}
                     alt={section.title}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSections;
