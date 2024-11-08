"server components";

import { subtract } from "@packages/utils";
import Link from "next/link";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  return (
    <div>
      <div className="text-center text-lg">employee page {subtract(1, 2)}</div>
      {/* render product */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="border p-4"
          >
            <h3 className="text-lg font-bold">{product.title}</h3>
            {/* <img src={product.image} alt={product.title} className="w-full" /> */}
            <p className="text-sm mt-2">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
