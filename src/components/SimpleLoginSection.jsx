import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

const SimpleLoginSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Simple Login Button */}
          <div className="flex justify-center">
            <Link
              to="/register"
              className="group bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 text-lg"
            >
              <LogIn className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span>سجل دخول</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleLoginSection;
