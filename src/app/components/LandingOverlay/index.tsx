import styles from './index.module.scss';
import { PiSword } from 'react-icons/pi';
import { motion } from 'motion/react';

interface LandingOverlayProps {
  onStart: () => void;
}
const LandingOverlay: React.FC<LandingOverlayProps> = ({ onStart }) => {
  return (
    <motion.div
      className={styles.landingOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      role="main"
      aria-label="Welcome Screen"
    >
      <h1 id="welcome-title">Welcome adventurer!</h1>
      <p>You&rsquo;ve entered the realm of code and creativity.</p>
      <p>It&rsquo;s dangerous to go alone! Take this:</p>

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      >
        <PiSword size={40} className={styles.swordIcon} data-testid="sword-icon" />
      </motion.div>

      <button
        className={styles.enterButton}
        onClick={onStart}
        aria-labelledby="welcome-title"
        aria-describedby="welcome-description"
      >
        Enter
      </button>
      <div id="welcome-description" className="sr-only">
        Press Enter or click the button to enter the portfolio
      </div>
    </motion.div>
  );
};

export default LandingOverlay;
