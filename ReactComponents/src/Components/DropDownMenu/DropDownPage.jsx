import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DropDownPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  
  const options = ['Dashboard', 'Settings', 'Earnings', 'Sign out'];

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  // Dropdown container animation
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Individual option animation
  const optionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: '#f0f0f0'
    }
  };

  return (
    <div className="relative w-64">
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full p-2 border rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue || 'Select an option'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute z-10 w-full mt-2 border rounded shadow-lg"
          >
            {options.map((option) => (
              <motion.li
                key={option}
                variants={optionVariants}
                whileHover="hover"
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownPage;