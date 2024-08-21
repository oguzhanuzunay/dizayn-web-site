import { ComponentType } from 'react';
import { styles } from './styles.js';

const SectionWrapper = (Component: ComponentType<any>, idName: string | undefined) =>
  function HOC() {
    return (
      <div className={`${styles.paddingX} relative z-0 mx-auto max-w-7xl`}>
        <Component />
      </div>
    );
  };

export default SectionWrapper;