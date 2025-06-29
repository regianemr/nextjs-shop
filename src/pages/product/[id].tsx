import { useRouter } from 'next/router';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est beatae ipsum nostrum, labore nobis fugiat totam facilis voluptate, voluptates quae doloribus aliquam, assumenda earum. Nesciunt, voluptatem? Quos, expedita molestias.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
