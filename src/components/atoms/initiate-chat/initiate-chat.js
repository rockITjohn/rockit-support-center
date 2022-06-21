import { useDispatch } from "react-redux";
import { setActiveChat } from "../../../redux/slices/chatSlice";

const InitiateChatBox = () => {
  const dispatch = useDispatch();
  const handleStartLiveChat = () => {
    console.log("Starting Live Chat");
    dispatch(setActiveChat(true));
  };
  return (
    <div className=" py-6 rounded  text-white">
      <p className="font-semibold pb-2 inline-block">
        Can't Find What You're Looking For?
      </p>
      <button
        className="font-bold text-center text-white rounded px-6 py-2 mx-5 bg-primary-orange "
        onClick={handleStartLiveChat}
      >
        Start a Live Chat
      </button>
    </div>
  );
};

export default InitiateChatBox;
