import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});
