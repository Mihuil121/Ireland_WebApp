// MyBlock.tsx
'use client'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showBlock, hideBlock } from '../Store/slices/scrollSlice';
import { RootState } from '../Store/store';
import { motion, AnimatePresence } from 'framer-motion';

interface MyBlockProps {
  id: string;
  children?: React.ReactNode;
}

function MyBlock({ id, children }: MyBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.scroll.blocks[id]);
  const activeSection = useSelector((state: RootState) => state.counter.activeSection);

  // Определяем, должен ли этот блок быть видимым на основе activeSection
  const shouldBeVisible = 
    (id === 'main-block' && activeSection === 'main') ||
    (id === 'city-block' && activeSection === 'city');

  useEffect(() => {
    if (shouldBeVisible) {
      // Небольшая задержка для плавной анимации
      const timer = setTimeout(() => {
        dispatch(showBlock(id));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      dispatch(hideBlock(id));
    }
  }, [shouldBeVisible, id, dispatch]);

  // Анимация появления слева направо
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: -100, // начинается слева
    },
    visible: {
      opacity: 1,
      x: 0, // приходит в центр
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // плавный easing
      }
    },
    exit: {
      opacity: 0,
      x: 100, // уходит вправо
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <AnimatePresence mode="wait">
        {shouldBeVisible && (
          <motion.div
            key={id}
            variants={animationVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="exit"
            style={{ width: '100%' }}
          >
            {children || 'Контент блока'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MyBlock;