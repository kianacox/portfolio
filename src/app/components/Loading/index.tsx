import styles from './index.module.scss';
import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

const LoadingComponent: React.FC = () => {
  return (
    <div className={styles.loadingContainer} data-testid="loading">
      <BiLoaderCircle className={styles.loadingIcon} size={40} />
    </div>
  );
};

const Loading = React.memo(LoadingComponent);
export default Loading;
