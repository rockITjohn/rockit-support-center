import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowEmailModal } from "../../../redux/slices/searchSlice";

import { setEmailAddress } from "../../../redux/slices/persistedSlice";
import { useSelector } from "react-redux";
const EmailModal = () => {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showEmailClear, setShowEmailClear] = useState(false);

  const dispatch = useDispatch();

  const { emailAddress } = useSelector((state) => state.persistedReducer);

  const closeModal = () => {
    dispatch(setShowEmailModal(false));
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailClear = () => {
    dispatch(setEmailAddress(""));
    setShowEmailClear(true);
    setTimeout(() => {
      setShowEmailClear(false);
    }, 3000);
  };

  const handleEmailSubmit = (e) => {
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
      setEmail("");
      setShowSuccess(true);
      setTimeout(() => {
        dispatch(setShowEmailModal(false));
        setShowSuccess(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-md">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*body*/}
            <div className="border rounded">
              <div
                className="font-bold text-lg float-right mx-2 cursor-pointer"
                onClick={closeModal}
              >
                X
              </div>
              <form
                className="text-black mx-6 my-6 text-center"
                onSubmit={handleEmailSubmit}
              >
                <label htmlFor="email" className="text-xl font-semibold">
                  Enter your email so we can personalize your experience
                </label>
                {showError && (
                  <p className="text-red-500">Please enter a valid email</p>
                )}
                {showSuccess && <p className="text-green-500">Thank you!</p>}
                {showEmailClear && (
                  <p className="text-green-500">Email Address Cleared</p>
                )}

                <input
                  type="email"
                  className="border block rounded my-4 w-3/4 mx-auto"
                  placeholder="Ex: rock@rockitdata.com"
                  name="email"
                  onChange={handleInputChange}
                />
                <div className="flex justify-around">
                  <button
                    type="submit"
                    className="border py-1 px-1 rounded border-slate-400"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {emailAddress && (
                <div className="my-2 text-center">
                  <p className="my-2">Current Email Address: {emailAddress}</p>
                  <button
                    className="border py-1 px-1 rounded border-slate-400"
                    onClick={handleEmailClear}
                  >
                    Clear Email Address
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EmailModal;
