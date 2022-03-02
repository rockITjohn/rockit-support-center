import SearchResults from "../search-results/search-results";
import DialogBox from "../dialog-box/dialog-box";
import QnABot from "../qna-bot/qna-bot";
import { useSelector } from "react-redux";
import VoiceBox from "../voice-box/voice-box";
import VideoBox from "../video-box/video-box";
import CameraBox from "../camera-box/camera-box";

const ResultsPanel = () => {
  const channel = useSelector((state) => state.channel);

  const renderSwitch = (channel) => {
    switch (channel) {
      case "chat":
        return <DialogBox />;
      case "voice":
        return <VoiceBox />;
      case "video":
        return <VideoBox />;
      case "camera":
        return <CameraBox />;
      case "default":
        return <QnABot />;
      default:
        return <QnABot />;
    }
  };

  return (
    <section>
      <div className="grid sm:flex container mx-auto h-screen">
        {renderSwitch(channel)}
        <SearchResults />
      </div>
    </section>
  );
};

export default ResultsPanel;
