import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0a0a0a] min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">404 Error</p>
          <h1 className="font-wedding-display text-6xl md:text-8xl text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-[#a0a0a0] text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-[#c9a962] text-[#0a0a0a] px-8 py-4 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
