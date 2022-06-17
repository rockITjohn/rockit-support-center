import { useDispatch } from "react-redux";
import { setActiveChat } from "../../../redux/slices/chatSlice";

const InitiateChatBox = () => {
  const dispatch = useDispatch();
  const handleStartLiveChat = () => {
    console.log("Starting Live Chat");
    dispatch(setActiveChat(true));
  };
  return (
    <div className="border py-6 px-6 rounded bg-primary-blue text-white">
      <p className="font-semibold pb-2">Can't Find What You're Looking For?</p>
      <p className="text-sm pb-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button
        className="font-bold text-center text-white rounded px-6 py-2 w-full bg-primary-orange"
        onClick={handleStartLiveChat}
      >
        Start a Live Chat
      </button>
    </div>
  );
};

export default InitiateChatBox;
