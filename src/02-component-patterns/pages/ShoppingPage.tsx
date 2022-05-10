import { ProductCard } from '../components';
import '../styles/custom-styles.css';
const product = {
  id: '1',
  title: 'coffee mug - Card',
  img: ' ',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard className="bg-dark" product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          className="bg-dark"
          style={{
            backgroundColor: 'red',
          }}
          product={product}
        >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
