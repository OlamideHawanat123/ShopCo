import { Outlet } from "react-router";
import SignupDiscountBar from "../Components/SignupDiscountBar";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export default function AppLayout() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <header>
        <SignupDiscountBar />
        <div className="flex justify-between">
          <div>
            <RxHamburgerMenu />
            <h1>SHOP.CO</h1>
          </div>
          <nav>
            <ul>
              <li>Shop</li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </nav>
          <div>
            <CiSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <MdOutlineShoppingCart />
            <FaRegUserCircle />
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
