import { ProductCard } from '../components/ProductCard';

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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'hola'} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'hola'} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
