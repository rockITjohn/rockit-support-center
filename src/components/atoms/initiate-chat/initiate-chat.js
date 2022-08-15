import { useDispatch } from "react-redux";
import { setActiveChat } from "../../../redux/slices/chatSlice";

const InitiateChatBox = () => {
  const dispatch = useDispatch();
  const handleStartLiveChat = () => {
    console.log("Starting Live Chat");
    dispatch(setActiveChat(true));
  };
  return (
    <div className=" rounded text-white md:grid text-center  flex mt-2 md:mt-0 ">
      <p className="font-semibold py-2 inline-block text-center">
        Can't Find What You're Looking For?
      </p>
      <div className="h-5">
        <button
          className="font-bold text-white text-sm rounded px-4 py-2 mx-3 bg-primary-orange md:h-10 md:px-2 md:py-1"
          onClick={handleStartLiveChat}
        >
          Start Live Chat
        </button>
      </div>
    </div>
  );
};

export default InitiateChatBox;
