import Menu from '../assets/svg/menu.svg'
import LWSLogoBlack from '../assets/lws-logo-black.svg'
import Avatar from '../assets/svg/avatar.svg'
import ShoppingCart from '../assets/svg/shopping-cart.svg'
import Image from 'next/image'


const Navbar = () => {
  return (
   <>
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
    <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
      <div className="flex items-center gap-2">
        <Image src={Menu} className="lg:hidden w-5 h-5" alt="" />
        <a href="./index.html">
          <Image src={LWSLogoBlack} className="h-10 text-white" alt="" />
        </a>
      </div>
    </div>
    <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
      <Image src={Avatar} className="hidden lg:block w-[18px] h-[18px]" alt="login acount avatar" />
      <Image src={ShoppingCart} className="block w-5 h-5" alt="shopping cart icon" />
    </div>
  </nav>
   </>
  )
}

export default Navbar