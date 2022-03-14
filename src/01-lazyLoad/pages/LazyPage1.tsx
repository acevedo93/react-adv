import { useRef, useState } from 'react';

export const LazyPage1 = () => {
  return <h1>Lazy Page 1</h1>;
};

export const NewComponent = () => {
  const [value, setValue] = useState(false);

  console.log(value, 'Hola mi nombres es dario');
  return <div>lhola soy un nuevo elementoe</div>;
};
