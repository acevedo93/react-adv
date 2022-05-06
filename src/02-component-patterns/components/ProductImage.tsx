import { ProductContext } from './ProductCard';
import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';
export const ProductImage = ({ image = '' }: { image?: string }) => {
  const {
    product: { img },
  } = useContext(ProductContext);

  let imgToShow: string = '';
  if (image) {
    imgToShow = image;
  } else if (img) {
    imgToShow = img;
  } else {
    imgToShow = noImage;
  }

  return <img src={imgToShow} alt="coffee mug" className={styles.productImg} />;
};
