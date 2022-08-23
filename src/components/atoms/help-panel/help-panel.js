import { useDispatch } from "react-redux";
import { setShowSendEmailModal } from "../../../redux/slices/appSlice";
import { setActiveChat } from "../../../redux/slices/chatSlice";

const HelpPanel = () => {
  const dispatch = useDispatch();

  const handleStartLiveChat = () => {
    console.log("Starting Live Chat");
    dispatch(setActiveChat(true));
  };

  const handleEmailUs = () => {
    dispatch(setShowSendEmailModal(true));
  };
  return (
    <div className="text-white md:grid text-center flex mt-2 md:mt-0 my-auto">
      <p className="font-semibold py-2 inline-block text-center">
        Can't Find What You're Looking For?
      </p>
      <div className="">
        <button
          className="font-bold text-white text-sm rounded  my-1 px-4 py-2 mx-3 bg-primary-orange md:h-10 md:px-2 md:py-1"
          onClick={handleStartLiveChat}
        >
          Start Live Chat
        </button>
        <button
          className="font-bold text-white text-sm rounded  my-1 px-4 py-2 mx-3 bg-primary-orange md:h-10 md:px-2 md:py-1"
          onClick={handleEmailUs}
        >
          Email Us
        </button>
      </div>
    </div>
  );
};

export default HelpPanel;
