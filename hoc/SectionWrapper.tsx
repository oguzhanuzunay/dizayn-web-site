// /hoc/SectionWrapper.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from './styles.js';

interface SectionWrapperProps {
  idName: string;
}

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
) => {
  const HOC: React.FC<P & SectionWrapperProps> = (props) => {
    return (
      <motion.section
        id={idName}
        className={JSON.stringify(styles)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
