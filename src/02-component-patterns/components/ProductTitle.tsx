import { useContext } from 'react';

import styles from '../styles/styles.module.css';

import { ProductContext } from './ProductCard';
export const ProductTitle = (product: { title: string }) => {
  const {
    product: { title },
  } = useContext(ProductContext);
  return <span className={styles.productDescription}> {title}</span>;
};
