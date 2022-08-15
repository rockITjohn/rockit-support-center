import { useSelector, useDispatch } from "react-redux";
import { setShowEmailModal } from "../../../redux/slices/searchSlice";

const Header = () => {
  const { emailAddress } = useSelector((state) => state.persistedReducer);

  const dispatch = useDispatch();

  const openEmailModal = () => {
    dispatch(setShowEmailModal(true));
  };
  console.log("Email address", emailAddress);
  return (
    <header className="px-5 w-full h-16 flex justify-between items-center z-10 relative shadow">
      <div className="text-center">
        <p className="text-3xl font-bold  px-1">
          <span className="">rock</span>
          <span className="text-[#2f5597]">IT</span>
          <span className="text-[#cc0100] italic">Discover</span>
        </p>
      </div>
      <div className="float-right text-center flex flex-col">
        <span className="text-white">
          Call us at{" "}
          <a href="tel:8557451840" className="font-bold cursor-pointer">
            855-745-1840
          </a>
        </span>
        {/* Opens modal to ask user for email or if they want to change their email */}
        <button
          className="text-white cursor-pointer"
          type="button"
          onClick={openEmailModal}
        >
          {emailAddress === "" ? (
            <p>Current Customer?</p>
          ) : (
            <p>Change email address?</p>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
