import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export const AnimatedRoute = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100%' }}
        transition={{ type: 'tween', duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

AnimatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
