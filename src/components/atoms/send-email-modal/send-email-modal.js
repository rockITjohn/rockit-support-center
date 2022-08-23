import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowSendEmailModal } from "../../../redux/slices/appSlice";
import {
  setEmailAddress,
  setCustomerName,
} from "../../../redux/slices/persistedSlice";
import { useSelector } from "react-redux";

const SendEmailModal = () => {
  const { emailAddress } = useSelector((state) => state.persistedReducer);

  const [email, setEmail] = useState(emailAddress);
  const [name, setName] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const API_URL = "https://0iqrv92mvi.execute-api.us-east-1.amazonaws.com/prod";

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setShowSendEmailModal(false));
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setEmailMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const clearStateAfteEmail = () => {
    setEmailMessage("");
    setName("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSendingEmail(true);
    console.log("name", name);
    console.log("email", email);
    console.log("message", emailMessage);
    // Check if email is valid
    // TODO: Do proper email validation
    if (!email.includes("@")) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      // Save name to redux
      dispatch(setCustomerName(name));
      // Create email params
      let params = {
        email_address: email,
        name: name,
        message: emailMessage,
      };
      // Send form to API Gateway
      try {
        let res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });
        console.log("Response from API", res);

        // If lambda errors, it returns a status of 500
        if (res.status !== 200) {
          throw new Error("Lambda failed!");
        }

        dispatch(setEmailAddress(email));
        setShowSuccess(true);
        setSendingEmail(false);
        clearStateAfteEmail();
        setTimeout(() => {
          setShowSuccess(false);
          dispatch(setShowSendEmailModal(false));
        }, 5000);
      } catch (error) {
        // Show Error Message
        console.error("Error:", error);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 5000);
      }
    }
  };

  return (
    <div className={`${sendingEmail ? "cursor-wait" : "cursor-auto"}`}>
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
              <div className="mx-6 my-6">
                <p className="mb-2">
                  Please fill out the form below and we will reach out as soon
                  as possible.
                </p>
                {/* Success and Error Messages */}
                {showError && (
                  <p className="text-red-500">
                    There was an error sending the email. Please reach us
                    through phone call or chat.
                  </p>
                )}
                {showSuccess && (
                  <p className="text-green-500">
                    Thank you for emailing us! We will respond to your email as
                    soon as possible.
                  </p>
                )}
                <form className="text-black" onSubmit={handleFormSubmit}>
                  <label htmlFor="name" className="">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="border block rounded w-full px-1"
                    placeholder="Ex: John Smith"
                    name="name"
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border block rounded w-full px-1"
                    placeholder="Ex: rock@rockitdata.com"
                    value={emailAddress}
                    name="email"
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="">
                    Message
                  </label>
                  <textarea
                    type="message"
                    className="border block rounded w-full px-1"
                    placeholder="Enter message here"
                    name="message"
                    onChange={handleChange}
                  />
                  <div className="flex justify-around">
                    <button
                      type="submit"
                      className="border py-1 px-1 mt-2 rounded border-slate-400"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default SendEmailModal;
