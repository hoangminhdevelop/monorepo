import { uppercase } from "@packages/utils";

interface Product {
  title: string;
}

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Phone store {uppercase("hello")}
      {products.map((product) => {
        return <h3 key={product.title}>{product.title}</h3>;
      })}
    </div>
  );
}
