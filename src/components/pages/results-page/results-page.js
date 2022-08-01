import ResultPanel from "../../templates/result-panel/result-panel";
import ChatWidget from "../../atoms/chat-widget/chat-widget";
import { useSelector } from "react-redux";

const ResultsPage = () => {
  const { activeChat } = useSelector((state) => state.chatReducer);
  return (
    <section>
      <div className="container mx-auto h-screen my-2 px-4">
        <div className="md:col-span-2">
          <ResultPanel />
        </div>
      </div>
      {activeChat ? (
        <div className="fixed bottom-10 right-10 ">
          <ChatWidget />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default ResultsPage;
