"use client";
import { products } from "../data/products";
import ProductList from "./ProductList";

const AllProducts = () => {
  console.log(products);
  return (
    <>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
      {products.map((product)=>(
        <ProductList key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} discountPercentage={product.discountPercentage} category={product.category} image={product.images} />
       ))}
      </div>
       
      </section>
    </>
  );
};

export default AllProducts;
