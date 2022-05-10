import { Props } from '../components/ProductCard';

export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product, className }: Props): JSX.Element;
  Title: (Props: { className?: string }) => JSX.Element;
  Image: (Props: { image?: string; className?: string }) => JSX.Element;
  Buttons: (Props: { className?: string }) => JSX.Element;
}
