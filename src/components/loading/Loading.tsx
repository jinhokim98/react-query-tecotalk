import { motion } from 'framer-motion';
import styles from './Loading.module.css';

function Loading() {
  return (
    <aside className={styles.loading}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="64px"
        height="64px"
        viewBox="0 0 64 64"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 1.5, repeat: Infinity }}
      >
        <path
          d="M37.3984 62.6523C32.8128 63.5092 28.0942 63.34 23.5817 62.1568C19.0692 60.9737 14.8747 58.8059 11.2995 55.8093C7.72418 52.8126 4.85686 49.0614 2.90341 44.8251C0.949967 40.5888 -0.0411276 35.9724 0.00130717 31.3076L4.94085 31.3525C4.90505 35.288 5.74119 39.1826 7.38923 42.7566C9.03726 46.3306 11.4563 49.4953 14.4726 52.0235C17.4889 54.5516 21.0276 56.3804 24.8346 57.3786C28.6416 58.3768 32.6224 58.5195 36.4911 57.7966L37.3984 62.6523Z"
          fill="white"
        />
      </motion.svg>
    </aside>
  );
}

export default Loading;
