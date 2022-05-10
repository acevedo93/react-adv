import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { CSSProperties, createContext, ReactNode, ReactElement } from 'react';
import { ProductContextProps } from '../interfaces/interfaces';
import { Product } from '../interfaces/interfaces';

export interface Props {
  product: Product;
  children: ReactNode | ReactElement;
  className: string;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;

export const ProductCardHOC = ({
  product,
  children,
  className,
  style,
}: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
