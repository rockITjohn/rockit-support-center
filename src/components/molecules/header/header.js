import EmailPopover from "../../atoms/email-popover/email-popover";

const Header = () => {
  return (
    <header className="px-5 w-full h-16 flex justify-between items-center z-10 relative shadow">
      <div className="text-center">
        <p className="text-3xl font-bold  px-1">
          <span className="">rock</span>
          <span className="text-[#2f5597]">IT</span>
          <span className="text-[#cc0100] italic">Discover</span>
        </p>
      </div>
      <div className="float-right text-center">
        <a href="tel:8557451840" className="text-white">
          Call us at{" "}
          <span className="font-bold cursor-pointer">855-745-1840</span>
        </a>
        <div>
          <EmailPopover />
        </div>
      </div>
    </header>
  );
};

export default Header;
