import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductTitle = ({ className }: { className?: string }) => {
  const {
    product: { title },
  } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`}>{title}</span>
  );
};
