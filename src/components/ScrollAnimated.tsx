'use client'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showBlock } from '../Store/slices/scrollSlice';
import { RootState } from '../Store/store';
import { motion } from 'framer-motion';

interface ScrollAnimatedProps {
  id: string;
  children: React.ReactNode;
}

const ScrollAnimated: React.FC<ScrollAnimatedProps> = ({ id, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.scroll.blocks[id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(showBlock(id));
        }
      },
      {
        threshold: 0.1, // срабатывает когда 10% элемента видно
        rootMargin: '0px 0px -50px 0px', // небольшой отступ снизу
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [id, dispatch]);

  // Анимация снизу вверх
  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 100, // начинается снизу
    },
    visible: {
      opacity: 1,
      y: 0, // поднимается вверх
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      }
    }
  };

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimated;

