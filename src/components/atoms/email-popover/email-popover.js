import { createRef, useState, useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { useDispatch } from "react-redux";
import { setEmailAddress } from "../../../redux/slices/appSlice";
import { useSelector } from "react-redux";
import { setShowEmailModal } from "../../../redux/slices/searchSlice";

const EmailPopover = () => {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const btnRef = createRef();
  const popoverRef = createRef();

  const { showEmailModal } = useSelector((state) => state.searchReducer);

  useEffect(() => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "right",
      // modifiers: [
      //   {
      //     name: "offset",
      //     options: {
      //       offset: [-50, 700],
      //     },
      //   },
      // ],
    });
    // eslint-disable-next-line
  }, []);

  const closePopover = () => {
    dispatch(setShowEmailModal(false));
    // setPopoverShow(false);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("Event", e);
    e.preventDefault();
    // Check if email is valid
    // TODO: Do proper email validation
    if (!email.includes("@")) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      // Dispatch email to redux, show success message and close modal
      dispatch(setEmailAddress(email));
      setShowSuccess(true);
      setTimeout(() => {
        // setPopoverShow(false);
        dispatch(setShowEmailModal(false));
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="absolute w-60 h-20 z-50 pt-2">
      <div ref={btnRef}></div>
      <div className="flex flex-wrap">
        <div />
        {/* The below is the code for the button that you click on to initiate the popout */}
        <div className="w-full text-center">
          {/* This is the code for the popover */}
          <div
            className={
              (showEmailModal ? "" : "hidden ") +
              "bg-white border-0  block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div className="border rounded">
              <div
                className="font-bold text-lg float-right mx-2 cursor-pointer"
                onClick={closePopover}
              >
                X
              </div>
              <form className="text-black px-2 py-2" onSubmit={handleSubmit}>
                <label for="email">
                  Enter your email to personalize your experience!
                </label>
                {showError && (
                  <p className="text-red-500">Please enter a valid email</p>
                )}
                {showSuccess && <p className="text-green-500">Thank you!</p>}
                <input
                  type="email"
                  className="border block rounded my-2 w-full"
                  placeholder="Ex: rock@rockitdata.com"
                  name="email"
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className="border py-1 px-1 rounded border-slate-400"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPopover;
