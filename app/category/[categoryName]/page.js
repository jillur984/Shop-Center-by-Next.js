

const CategoryPage = ({params:{categoryName}}) => {
  return (
   <>
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <button className="hover:border-b border-black block h-6 box-border mt-4">All</button>
        <button className="hover:border-b border-black block h-6 box-border mt-5">Smartphones</button>
        <button className="hover:border-b border-black block h-6 box-border mt-5">Laptops</button>
        <button className="hover:border-b border-black block h-6 box-border mt-5">Fragrances</button>
        <button className="hover:border-b border-black block h-6 box-border mt-5">Skincare</button>
        <button className="hover:border-b border-black block h-6 box-border mt-5">Groceries</button>
      </div>
      <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
       
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              iPhone 9
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Smartphones)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">An apple mobile which is nothing like apple</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
        
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/macbook-pro.png')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              MacBook Pro
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Laptops)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">MacBook Pro 2021 with mini-LED display may launch between September,
            November</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
     
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/samsung-galaxy-book.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              Samsung Galaxy Book
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Laptops)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM
            Launched</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
      
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/perfume.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              Brown Perfume
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Fragrances)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">Royal_Mirage Sport Brown Perfume for Men & Women - 120ml</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
      
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              iPhone 9
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Smartphones)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">An apple mobile which is nothing like apple</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
       
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/macbook-pro.png')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              MacBook Pro
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Laptops)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">MacBook Pro 2021 with mini-LED display may launch between September,
            November</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
       
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/samsung-galaxy-book.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              Samsung Galaxy Book
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Laptops)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM
            Launched</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
       
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/perfume.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              Brown Perfume
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Fragrances)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">Royal_Mirage Sport Brown Perfume for Men & Women - 120ml</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
        
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              iPhone 9
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Smartphones)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">An apple mobile which is nothing like apple</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
        
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/macbook-pro.png')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              MacBook Pro
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Laptops)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">MacBook Pro 2021 with mini-LED display may launch between September,
            November</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
        
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/samsung-galaxy-book.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              Samsung Galaxy Book
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Laptops)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM
            Launched</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
       
        <div>
          <div
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('./assets/products/perfume.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
          </div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              Brown Perfume
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">(Fragrances)</a>
            </span>
          </h2>
          <p className="text-[#919090] text-sm ">Royal_Mirage Sport Brown Perfume for Men & Women - 120ml</p>

          <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> $195.00</p>
        </div>
        
      </div>
    </section>
   </>
  )
}

export default CategoryPage