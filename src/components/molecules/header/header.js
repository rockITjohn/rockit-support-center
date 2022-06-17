// import { ReactComponent as MenuLogo } from "../../../assets/menu.svg";
import headerImage from "../../../assets/rockitdiscover.png";

const Header = () => {
  return (
    <header className="px-5 w-full h-16 bg-primary-blue flex justify-between items-center shadow-[0px_1px_10px_0px_rgb(0,0,0,25%)] z-10 relative">
      <div className="text-center">
        <p className="text-3xl font-bold bg-white px-1">
          <span className="">rock</span>
          <span className="text-[#2f5597]">IT</span>
          <span className="text-[#cc0100] italic">Discover</span>
        </p>
        {/* <img src={headerImage} alt="" /> */}
      </div>
      {/* <div className="">
        <MenuLogo />
      </div> */}
    </header>
  );
};

export default Header;
