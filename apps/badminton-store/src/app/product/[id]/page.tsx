import Image from "next/image";
import { Product } from "../page";

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const products: Product[] = await res.json();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

type Params = Promise<{ id: string }>;

export default async function ProductDetail(props: { params: Params }) {
  const { id } = await props.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={200} height={200} />
    </div>
  );
}
