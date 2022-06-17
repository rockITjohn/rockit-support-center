import { ReactComponent as CameraSvg } from "../../assets/camera.svg";
import { ReactComponent as ChatSvg } from "../../assets/chat.svg";
import { ReactComponent as VoiceSvg } from "../../assets/voice.svg";
import { ReactComponent as VideoSvg } from "../../assets/video.svg";
import { ReactComponent as ReturnSvg } from "../../assets/return.svg";
import { ReactComponent as XSvg } from "../../assets/x.svg";

import { useDispatch } from "react-redux";
import { setChannel } from "../../redux/channel.actions";
import { useSelector } from "react-redux";

const ChannelSwitcher = ({ handleSetShowChannelSwitcher }) => {
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.channel);

  const changeChannelAndSetActive = (channel) => {
    dispatch(setChannel(channel));
  };

  const handleOnClick = () => {
    handleSetShowChannelSwitcher();
    dispatch(setChannel("default"));
  };

  const linksData = [
    {
      id: "chat",
      phrase: "Live Chat",
      component: <ChatSvg />,
    },
    {
      id: "voice",
      phrase: "Voice Chat",
      component: <VoiceSvg />,
    },
    {
      id: "video",
      phrase: "Video Chat",
      component: <VideoSvg />,
    },
    {
      id: "camera",
      phrase: "Send a Picture",
      component: <CameraSvg />,
    },
    {
      id: "default",
      phrase: "Back to Answers",
      component: <ReturnSvg />,
    },
  ];

  return (
    <section className="px-2 py-1 rounded-xl bg-faded-white shadow">
      <span
        className="float-right cursor-pointer shadow rounded hover:-translate-y-0.5"
        onClick={handleOnClick}
      >
        <XSvg />
      </span>
      <h1 className="font-bold text-center py-2">
        Choose how you would like to reach us:
      </h1>
      <div className="flex justify-around gap-2">
        {linksData.map(({ id, component, phrase }) => {
          return (
            <button
              className={
                "channel-button" +
                (channel === id && channel !== "default" ? " active-link" : "")
              }
              onClick={() => changeChannelAndSetActive(id)}
              key={id}
            >
              <div className="mx-auto">{component}</div>
              <p>{phrase}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ChannelSwitcher;
