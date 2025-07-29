import { Outlet } from "react-router";
import SignupDiscountBar from "../Components/SignupDiscountBar";
import { CiSearch } from "react-icons/ci";

export default function AppLayout() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <header>
        <SignupDiscountBar />
        <div>
          <h1>SHOP.CO</h1>
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
          <div></div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
