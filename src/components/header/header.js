import { ReactComponent as MenuLogo } from "../../assets/menu.svg";

const Header = () => {
  return (
    <header className="px-5 w-full h-12 bg-gray-200 flex justify-between items-center">
      <div className="text-center">
        <p className="text-xl font-bold">
          rock<span className="text-[rgb(209,35,44)]">IT</span>data
        </p>
        <p>cloud &middot; data &middot; people</p>
      </div>
      <div className="">
        <MenuLogo />
      </div>
    </header>
  );
};

export default Header;
