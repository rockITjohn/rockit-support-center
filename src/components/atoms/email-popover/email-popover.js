import { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { useDispatch } from "react-redux";
import { setEmailAddress } from "../../../redux/slices/appSlice";
import { useSelector } from "react-redux";

const EmailPopover = () => {
  const [popoverShow, setPopoverShow] = useState(false);
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const btnRef = createRef();
  const popoverRef = createRef();

  const { emailAddress } = useSelector((state) => state.appReducer);

  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [-50, 10],
          },
        },
      ],
    });
    setPopoverShow(true);
  };

  const closePopover = () => {
    setPopoverShow(false);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("Event", e);
    e.preventDefault();
    if (!email.includes("@")) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      dispatch(setEmailAddress(email));
      setShowSuccess(true);
      setTimeout(() => {
        setPopoverShow(false);
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        {/* The below is the code for the button that you click on to initiate the popout */}
        <div className="w-full text-center">
          <button
            // className=" text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            className="text-white"
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            {emailAddress === "" ? (
              <p>Current Customer?</p>
            ) : (
              <p>Thanks! Change email address?</p>
            )}
          </button>
          {/* This is the code for the popover */}
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-white/95 border-0  block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
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
    </>
  );
};

export default EmailPopover;
