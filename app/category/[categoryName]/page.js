"use client";
import { products } from "@/app/data/products";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryPage = ({ params }) => {
  const { categoryName } = params; // categoryName comes from the dynamic route

  const [filterCategory, setFilterCategory] = useState([]);

  useEffect(() => {
    const filterCategoryProducts = products.filter(
      (item) => item.category.toLowerCase() === categoryName.toLowerCase()
    );

    setFilterCategory(filterCategoryProducts);
  }, [categoryName]);

  const filterbySidebar = (category) => {
    const filtered =
      category === "All"
        ? products
        : products.filter((item) => item.category === category);

    if (!category) {
      <h2>Item not have for this Category</h2>;
    }

    setFilterCategory(filtered);
  };

  return (
    <>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <button
            onClick={() => filterbySidebar("All")}
            className="hover:border-b border-black block h-6 box-border mt-4"
          >
            All
          </button>
          <button
            onClick={() => filterbySidebar("Smartphones")}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Smartphones
          </button>
          <button className="hover:border-b border-black block h-6 box-border mt-5">
            Laptops
          </button>
          <button
            onClick={() => filterbySidebar("fragrances")}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Fragrances
          </button>
          <button
            onClick={() => filterbySidebar("beauty")}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Skincare
          </button>
          <button
            onClick={() => filterbySidebar("beauty")}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Groceries
          </button>
        </div>

        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {filterCategory.length > 0 ? (
            filterCategory.map((product, index) => (
              <div key={index}>
                <div
                  className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
                  style={{ backgroundImage: `url(${product.thumbnail})` }} // Dynamic image URL
                ></div>
                <h2 className="text-sm lg:text-base mt-2">
                  <Link
                    className="text-base font-bold"
                    href={`/products/${product.id}`}
                  >
                    {product.title}
                  </Link>
                  <span className="text-[#919090]">
                    <Link href={`/category/${product.category}`}>
                      ({product.category})
                    </Link>
                  </span>
                </h2>
                <p className="text-[#919090] text-sm ">{product.description}</p>

                <p className="text-rose-600 text-sm mt-4">
                  <span className="text-[#919090] line-through">
                    {product.price}
                  </span>{" "}
                  {product.discountPercentage}
                </p>
              </div>
            ))
          ) : (
            <h2 className="col-span-2 lg:col-span-3 text-center text-lg font-bold">
              No items available for this category.
            </h2>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
